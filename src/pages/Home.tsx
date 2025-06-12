import { useState, useEffect } from 'react'
import VideoCard from "../components/VideoCard";
import { mockVideos } from "../data/mockVideos";
import VideoTags from '../components//watch/VideoTags';
import VideoSkeleton from '../components/VideoSkeleton';


const useReloadOnReconnect = () => {
  useEffect(() => {
    const handleOnline = () => {
      console.log('Back online!');
      window.location.reload()
    }

    window.addEventListener('online', handleOnline);

    return () => {
      window.removeEventListener('online', handleOnline)
    }
  }, [])

}

const Home = () => {
  useReloadOnReconnect()
  const [activeTag, setActiveTag] = useState("All")
  const [loading, setLoading] = useState(true)

  const allTags = ["All", ...new Set(mockVideos.flatMap(v => v.tags))]
  const filteredVideos = activeTag === "All" ? mockVideos : mockVideos.filter(v => v.tags.includes(activeTag))

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setLoading(false)
    }, 1500);
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div>
    <VideoTags tags= { allTags } activeTag = { activeTag } setActiveTag = { setActiveTag } />
      <div className= "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3" >

      {
        loading? Array.from({ length: 6 }).map((_, i) => <VideoSkeleton key={ i } />) : filteredVideos.map((video, i) => (
          <VideoCard key= { i } { ...video } />
        ))
      }

        </div>
        </div>
  )
}

export default Home




