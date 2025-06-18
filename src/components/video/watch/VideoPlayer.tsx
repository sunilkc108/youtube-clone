import { type FC } from "react";

import { PlayerOnly } from "./PlayerOnly";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments";
import { type VideoCardProps } from "../../../types";


interface VideoPlayerProps {
  video: VideoCardProps
}

const VideoPlayer: FC<VideoPlayerProps> = ({ video }) => {
  const { videoUrl, title, channel, views, published, comments } = video;
  return (
    <>

    {/* Player */ }
    < PlayerOnly title = { title } videoUrl = { videoUrl } />

      {/* Details..... */ }
      < VideoDetails title = { title } channel = { channel } views = { views } published = { published } />

        {/* Comments here */ }
        < Comments comments = { comments } />

          </>
  );
};

export default VideoPlayer;
