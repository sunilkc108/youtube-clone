const VideoSkeleton = () => {
  return (
    <div className="w-[463px] h-[388px] animate-pulse">
      <div className="w-full h-[260px] bg-gray-300 rounded-lg mb-3"></div>
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        <div className="flex flex-col gap-2 flex-1">
          <div className="w-3/4 h-4 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;