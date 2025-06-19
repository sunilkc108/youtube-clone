import { HiOutlineDotsVertical } from "react-icons/hi";
import { useSearchParams } from "react-router-dom";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useSearchVideos from "../../hooks/useSearchVideos";

const Search = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // search query
  const searchQuery = searchParams.get("query") || "";

  const { data: filteredVideos, loading, error } = useSearchVideos(searchQuery);
  console.log(filteredVideos, "data aaa");

  const handleClick = (id: string) => {
    navigate(`/watch/${id}`);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="flex flex-col mx-auto pl-20 pr-20">
      {filteredVideos &&
        filteredVideos.length > 0 &&
        filteredVideos.map((vid, i) => (
          <div
            onClick={() => handleClick(vid.id)}
            key={i}
            className="flex gap-2 justify-start mb-3 cursor-pointer"
          >
            <img
              src={vid.snippet.thumbnails.medium.url}
              alt=""
              height={280}
              width={500}
            />
            <div className="mt-2">
              <h1 className="font-medium text-lg">{vid.snippet.title}</h1>
              <p className="text-gray-600 text-xs ">
                {vid.statistics?.viewCount} views . {vid.snippet.publishedAt}
              </p>
              <p className="text-gray-400 text-xs mt-6">
                {vid.snippet.channelTitle}
              </p>
              <p className="text-gray-600 text-xs mt-4">
                {vid.snippet.description.substring(0, 200)}
              </p>
            </div>
            <HiOutlineDotsVertical size={30} />
          </div>
        ))}
    </div>
  );
};

export default Search;

// 500 * 280 - thumbnail
// 1250 * 280
