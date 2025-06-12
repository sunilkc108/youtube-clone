"use client"

import { useState } from "react"
import VideoPlayer from "../components/watch/VideoPlayer.js"
import SuggestVideo from "../components/watch/SuggestVideo.js"
import VideoTags from "../components/watch/VideoTags.js"
import TaggedVideos from "../components/watch/TaggedVideos.js"
import { useParams } from "react-router-dom"
import { mockVideos } from "../data/mockVideos.js"

const Watch = () => {
  const [activeTag, setActiveTag] = useState<string>("All")

  const { id } = useParams()
  const video = mockVideos.find((vid) => vid.id === id)

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
            <SuggestVideo />

            < button className = "rounded-3xl border w-full mt-8 mb-8 py-1.5 border-gray-200 text-sm font-medium cursor-pointer hover:bg-gray-200" >
              Show chat reply
                </button>

                < VideoTags tags = { video.tags } activeTag = { activeTag } setActiveTag = { setActiveTag } />
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
