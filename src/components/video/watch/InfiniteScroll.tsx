import { useState, useEffect, useCallback } from "react";

const fetchMoreItems = async (page: number): Promise<{ id: number; title: string; content: string }[]> => {
  await new Promise((res) => setTimeout(res, 1000)); // simulate delay
  const items = Array.from({ length: 10 }, (_, i) => {
    const n = (page - 1) * 10 + i + 1;
    return {
      id: n,
      title: `Item ${n}`,
      content: `This is some content for item ${n}.`,
    };
  });
  return items;
};

export default function InfiniteScrollDemo() {
  const [items, setItems] = useState<{ id: number; title: string; content: string }[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loadMoreItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const newItems = await fetchMoreItems(page);
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setItems((prev) => [...prev, ...newItems]);
        setPage((p) => p + 1);
      }
    } catch (err) {
      console.error("Error loading items", err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadMoreItems();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreItems]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Infinite Scroll Demo
        </h1>

        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Posted 2 hours ago</span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">#{item.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {loading && (
          <div className="text-center py-8 text-blue-600 font-medium animate-pulse">
            Loading more items...
          </div>
        )}

        {!hasMore && (
          <div className="text-center py-8 text-gray-500">
            🎉 You’ve reached the end!
          </div>
        )}
      </div>
    </div>
  );
}