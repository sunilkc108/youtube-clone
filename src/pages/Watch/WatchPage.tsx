import { useState } from "react"
import VideoPlayer from "./components/VideoPlayer.js"
import useFindVideoById from "../../hooks/useFindVideoById.js"
import VideoTags from "./components/VideoTags.js"
import TaggedVideos from "./components/TaggedVideos.js"

const Watch = () => {
    
    const { data: video, loading, error } = useFindVideoById()
    const [activeTag, setActiveTag] = useState<string>("All")
    

    if (loading) return <div>Loading....</div>
    if (error) return <div>Error: {error}.</div>
    if (!video) return <div>Video not found.</div>

    return (
        <div className= "lg:flex gap-6 px-4 h-screen" >
        {/* player and video suggestion section */ }
        < div className = "flex-1 flex flex-col" >
            <VideoPlayer video={ video } />
                </div>
                < div className = "lg:w-[350px] hidden xl:flex flex-col bg-[#ffffff] h-full" >
                    {/* Suggestions*/ }
                    < div className = "flex-shrink-0" >
                        {/* <SuggestVideo /> */}

                        {/* < button className = "rounded-3xl border w-full mt-8 mb-8 py-1.5 border-gray-200 text-sm font-medium cursor-pointer hover:bg-gray-200" >
                            Show chat reply
                                </button> */}

                                < VideoTags tags = { video.snippet.tags ?? [] } activeTag = { activeTag } setActiveTag = { setActiveTag } />
                                    </div>

    {/* Scrollable tagged videos section */ }
    <div className="flex-1 min-h-0" >
        <TaggedVideos activeTag={ activeTag } />
            </div>
            </div>
            </div>
  )
}

export default Watch

// https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDJJKXicx8z6aNWWaJ8KcFo9zt8CQigJEY&part=snippet&maxResults=20&q=People+Media+Factory+The+Rajasaab+The+Rajasaab+Telugu+Teaser+The+Rajasaab+Teaser+Rajasaab+Teaser+Rajasaab+Telugu+Teaser+Rajasaab+Teaser+Telugu+Prabhas+Maruthi+Thaman+S&type=video