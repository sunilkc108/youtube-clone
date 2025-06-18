"use client";

import { useState, type UIEvent, useRef, useEffect } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import type { Video } from "../../../types";
import useRelatedVideos from "../../../hooks/useRelatedVideos";
import { useNavigate } from "react-router-dom";

type TaggedVideosProps = {
  activeTag: string;
};

const TaggedVideos = ({ activeTag }: TaggedVideosProps) => {
  const { data: relatedVideos, loading, error } = useRelatedVideos();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredVideos: Video[] =
    activeTag === "All"
      ? relatedVideos
      : relatedVideos.filter((v) => v.snippet.tags?.includes(activeTag));

  const [visibleCount, setVisibleCount] = useState<number>(10);

  // Reset visible count when activeTag changes
  useEffect(() => {
    setVisibleCount(10);
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [activeTag]);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const scrollTop = el.scrollTop;
    const scrollHeight = el.scrollHeight;
    const clientHeight = el.clientHeight;

    // Check if we're near the bottom (within 10px)
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setVisibleCount((prevCount) => {
        const newCount = Math.min(prevCount + 10, filteredVideos.length);
        return newCount;
      });
    }
  };

  return (
    <div
      onScroll= { onScroll }
  ref = { containerRef }
  className = "overflow-y-auto space-y-2"
  style = {{
    height: "calc(100vh - 100px)", // Fixed height to enable scrolling
      maxHeight: "600px", // Maximum height constraint
      }
}
    >
  {/* Other videos */ }
{
  filteredVideos &&
  filteredVideos.slice(0, visibleCount).map((vid, i) => (
    <div
            key= {`${vid.id}-${i}`} // Better key using video id
onClick = {() => navigate(`/watch/${vid.id}`)}
className = "group flex items-start justify-between cursor-pointer mb-2 hover:bg-gray-50 p-2 rounded-lg transition-colors"
  >
  <div className="flex gap-3" >
    <img
                src={ vid.snippet.thumbnails.medium.url || "/placeholder.svg" }
alt = { vid.snippet.title }
className = "rounded-xl object-cover flex-shrink-0"
height = "94"
width = "168"
  />
  <div className="flex flex-col gap-0.5 min-w-0" >
    <h2 className="text-sm font-medium line-clamp-2 leading-tight" >
      { " "}
{ vid.snippet.title } { " " }
</h2>
  < p className = "text-xs text-gray-400" >
    { " "}
{ vid.snippet.channelTitle } { " " }
</p>
  < p className = "text-xs text-gray-400" >
    { " "}
11M views • 1 month ago{ " " }
</p>
  </div>
  </div>
  < span className = "flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" >
    <HiOutlineDotsVertical size={ 18 } />
      </span>
      </div>
        ))}

{/* Loading indicator */ }
{
  visibleCount < filteredVideos.length && (
    <div className="flex justify-center py-4" >
      <div className="text-sm text-gray-500" > Loading more videos...</div>
        </div>
      )
}

{/* End of results indicator */ }
{
  visibleCount >= filteredVideos.length && filteredVideos.length > 10 && (
    <div className="flex justify-center py-4" >
      <div className="text-sm text-gray-500" > No more videos to load </div>
        </div>
      )
}
</div>
  );
};

export default TaggedVideos;
