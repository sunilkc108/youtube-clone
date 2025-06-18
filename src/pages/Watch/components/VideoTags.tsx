import { useLocation } from "react-router-dom";
import type { TagsType } from "../../../types";
import type { FC } from "react";

const VideoTags: FC<TagsType> = ({ tags, activeTag, setActiveTag }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div
      className= {`${isHome ? "w-[60vw] -ml-4 pr-4" : "w-[350px]"
      } overflow-x-auto whitespace-nowrap scrollbar-hide mb-4`
}
    >
  <div className="flex gap-2" >
  {/*<button key={ i } className = "bg-black text-white rounded-lg text-xs font-semibold p-2  cursor-pointer" >
      { t }
      </button> Suggestions*/}
{
  tags &&
    tags.map((t, i) => (
      <button
              key= { i }
              onClick = {() => setActiveTag(t)}
className = {`flex-shrink-0 rounded-lg text-xs font-semibold p-2 cursor-pointer ${activeTag === t ? "bg-black text-white" : "bg-[#F2F3F2]"
  }`}
            >
  { t }
  </button>
          ))}
</div>
  </div>
  );
};

export default VideoTags;
