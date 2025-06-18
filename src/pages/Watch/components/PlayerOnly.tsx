// import { type PlayerProps } from "../../../types"

export const PlayerOnly = ({ title, videoUrl }: { title: string, videoUrl: string }) => {
  return (
    <div className= "h-[455px] w-full mb-4" >
    <iframe
          className="w-full h-full rounded-lg"
  src = { videoUrl }
  title = { title }
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy = "strict-origin-when-cross-origin"
  allowFullScreen
    > </iframe>
    </div>
  )
}