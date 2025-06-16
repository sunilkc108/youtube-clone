import type { FC } from "react";
// import { useNavigate } from "react-router-dom";
import { type Video } from "../../types";

const VideoCard:FC<Video> = ({ id, snippet, statistics }) => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/watch/${id}`);
  // };

  return (
    <div
      className="w-full sm:w-72 md:w-64 lg:w-80 cursor-pointer hover:scale-105 transition-transform"
      // onClick={handleClick}
    >
      <img
        src={snippet.thumbnails.medium.url}
        alt="Thumbnail"
        className="w-full object-cover rounded-lg"
      />
      <div className="flex mt-3 space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold">{snippet.title}</h3>
          <p className="text-xs text-gray-500">{snippet.channelTitle}</p>
          <p className="text-xs text-gray-500">
            {statistics?.viewCount
              ? `${Number(statistics.viewCount).toLocaleString()} views`
              : "Views unknown"}{" "}
            {/* • {new Date(snippet.publishedAt).toLocaleDateString()} */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
