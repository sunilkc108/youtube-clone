
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useSearchParams } from "react-router-dom"
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockVideos } from "../data/mockVideos";

const Search = () => {
  const navigate = useNavigate()
  // const [videos, setVideos] = useState([])
  const [searchParams] = useSearchParams();
  
  // search query
  const searchQuery = searchParams.get('query') || '';

  const filteredVideos = mockVideos.filter(vid => vid.title.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleClick = (id:string) =>{
    navigate(`/watch/${id}`)
  }
  
  return (
    <div className="flex flex-col mx-auto pl-20 pr-20">
      {filteredVideos.length > 0 && filteredVideos.map((vid, i) =>(
        <div onClick={()=>handleClick(vid.id)} key={i} className="flex gap-2 justify-start mb-3 cursor-pointer">
          <img src={vid.thumbnail} alt="" height={280} width={500}/>
          <div className="mt-2">
            <h1 className="font-medium text-lg">{vid.title}</h1>
            <p className="text-gray-600 text-xs ">52K views . 5 hours ago</p>
            <p className="text-gray-400 text-xs mt-6">asianetnews</p>
            <p className="text-gray-600 text-xs mt-4">Watch ' 24 '  Malayalam Channel HD Live Streaming for Malayalam Live News, Updates, Breaking News, Political News and Debates, Kerala news, Mollywood Entertainment News, Business News, and Health News.</p>
          </div>
          <HiOutlineDotsVertical size={30}/>
        </div>
      ))}
    </div>
  )
}

export default Search


// 500 * 280 - thumbnail
// 1250 * 280