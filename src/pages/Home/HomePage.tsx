import usePopularVideos from "../../hooks/usePopularVideos";
import VideoCard from "./components/VideoCard";

const HomePage = () => {
  const { data: videos, loading, error } = usePopularVideos();

  if (loading) return <p>Loading Videos...</p>;
  if (loading) return <p>Error: {error}</p>;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos?.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
