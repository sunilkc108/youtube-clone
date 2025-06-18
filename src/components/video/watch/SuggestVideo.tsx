import { FaX } from "react-icons/fa6";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { suggestedVideoList } from "../../../data/suggestedVideos";
import { useNavigate } from "react-router-dom";

const SuggestVideo = () => {
  const navigate = useNavigate()

  const handleClick = (id: string) => {
    navigate(`/watch/${id}`)
  }
  return (
    <div className= "suggestion-div rounded-2xl border border-gray-200" >
    {/* Suggestions Header*/ }
    < div className = "flex justify-between items-center p-4 bg-[#ffffff] rounded-t-2xl h-[92px]" >
      <div className="flex flex-col" >
        <h1 className="text-lg font-bold" > Mix - Wangden Sherpa &..</h1>
          < p className = "text-xs text-gray-400" >
            Mixes are playlists YouTube makes for you
              </p>
              </div>
              < div className = "flex flex-col gap-6" >
              <FaX size= { 18} />
              <HiOutlineDotsVertical size= { 18} />
                </div>
                </div>
  {/* Suggestions Header*/ }

  <div>
    <div className="h-[365px] overflow-y-auto" >
      {/* Suggested videos list */ }
  {
    suggestedVideoList &&
    suggestedVideoList.map((vid, i) => (
      <div key= { i } className = "group flex items-center justify-between pl-4 pr-4 space-y-2 hover:bg-gray-100 cursor-pointer"
              onClick = {() => handleClick(vid.id)}
              >
  <div className="flex gap-2" >
    <img
                    src={ vid.thumbnail }
alt = "Image"
className = "rounded-xl object-cover"
height = "56px"
width = "100px"
  />
  <div className="flex flex-col" >
    <h2 className="text-sm font-medium" >
      { vid.title }
      </h2>
      < p className = "text-xs text-gray-400" > { vid.channel } </p>
        </div>
        </div>
        < span className = "opacity-0 group-hover:opacity-100" >
          <HiOutlineDotsVertical size={ 18 } />
            </span>
            </div>
            ))}
{/* Suggested videos list end */ }
</div>
  </div>
  </div>
  );
};

export default SuggestVideo;
