import { useNavigate } from "react-router-dom";
import { type VideoCardProps } from "../../types";


const VideoCard = ({
  id,
  thumbnail,
  title,
  channel,
  views,
  time,
}: VideoCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className= "w-[463px] h-[388px] cursor-pointer hover:scale-105 transition-transform"
  // className="w-full sm:w-72 md:w-64 lg:w-80 cursor-pointer hover:scale-105 transition-transform"
  onClick = {() => navigate(`/watch/${id}`)}
    >
  <img
        src={ thumbnail }
alt = "Thumbnail"
className = "w-full object-cover rounded-lg"
height = { 260}
width = { 463}
  />
  <div className="flex mt-3 space-x-3" >
    <div className="w-10 h-10 bg-gray-300 rounded-full" > </div>
      < div className = "flex flex-col gap-1" >
        <h3 className="text-sm font-semibold" > { title } </h3>
          < p className = "text-xs text-gray-500" > { channel } </p>
            < p className = "text-xs text-gray-500" >
              { " "}
{ views }.{ time } { " " }
</p>
  </div>
  </div>
  </div>
  );
};

export default VideoCard;
