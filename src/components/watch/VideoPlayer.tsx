import { type FC } from "react";

import { PlayerOnly } from "./PlayerOnly";
import VideoDetails from "./VideoDetails";
import Comments from "./Comments";


interface VideoType  {
  id: string;
  thumbnail: string;    // fix spelling
  title: string;
  channel: string;
  views: string;
  published: string;    // match data
  videoUrl: string;
  tags: string[];
  time: string;
  comments: {
    name: string;
    date: string;
    comment: string;
  }[];
}

interface VideoPlayerProps {
  video: VideoType
}

const VideoPlayer:FC<VideoPlayerProps> = ({video}) => {
  const { videoUrl, title, channel, views, published, comments } = video;
  return (
    <>
    
     {/* Player */}
     <PlayerOnly title={title} videoUrl={videoUrl}/>
    
     {/* Details..... */}
      <VideoDetails title={title} channel={channel} views={views} published={published} />
    
      {/* Comments here */}
      <Comments comments={comments}/>
      
    </>
  );
};

export default VideoPlayer;
