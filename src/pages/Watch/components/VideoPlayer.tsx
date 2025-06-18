import { type FC } from "react";
import { PlayerOnly } from "./PlayerOnly";
import VideoDetails from "./VideoDetails";
import VideoComments from "./VideoComments";
import {  type Video } from "../../../types";
import useCommentByVideoId from "../../../hooks/useFindCommentsByVideoId";

type VideoPlayerProps = {
  video: Video;
};

const VideoPlayer: FC<VideoPlayerProps> = ({ video }) => {
  const { data: comments, loading, error } = useCommentByVideoId();
  // console.log(comments, "comments");

  if (loading) return <p>Loading..</p>;

  return (
    <>
      {/* Player */}
      <PlayerOnly
        title={video?.snippet?.title}
        videoUrl={`https://www.youtube.com/embed/${video?.id}`}
      />

      {/* Details..... */}
      <VideoDetails
        title={video?.snippet?.title}
        channel={video?.snippet?.channelTitle}
        views={video?.statistics?.viewCount}
        published={video?.snippet?.publishedAt}
        description={video?.snippet?.description}
        likes={video?.statistics?.likeCount}
      />

      {/* Comments here */}

      <VideoComments comments={comments ?? []} />
    </>
  );
};

export default VideoPlayer;
