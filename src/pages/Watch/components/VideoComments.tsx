import { useState, type ChangeEvent, useCallback, useEffect } from "react";
import {
  HiOutlineEmojiHappy,
  HiOutlineThumbDown,
  HiOutlineThumbUp,
} from "react-icons/hi";
import { MdOutlineEdit } from "react-icons/md";
import { type SingleComment } from "../../../types";

interface VideoCommentsProps {
  comments: SingleComment[];
}

const VideoComments = ({ comments: initialComments }: VideoCommentsProps) => {
  const [displayedComments, setDisplayedComments] = useState<SingleComment[]>(
    []
  );
  const [newUserComments, setNewUserComments] = useState<SingleComment[]>([]);
  const [page, setPage] = useState(1);
  const [newComment, setNewComment] = useState("");
  const [isCommentFocused, setIsCommentFocused] = useState(false);
  const [commentLength, setCommentLength] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreComments = useCallback(async () => {
    const pageSize = 3;
    setLoading(true);

    const nextPageComments = initialComments.slice(
      (page - 1) * pageSize,
      page * pageSize
    );

    if (nextPageComments.length === 0) {
      setHasMore(false);
    } else {
      setDisplayedComments((prev) => [...prev, ...nextPageComments]);
      setPage((prev) => prev + 1);
    }

    setLoading(false);
  }, [page, initialComments]);

  useEffect(() => {
    if (initialComments.length) fetchMoreComments();
  }, [initialComments]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 100) {
        fetchMoreComments();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchMoreComments]);

  const handleCommentInputFocus = () => setIsCommentFocused(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewComment(e.target.value);
    setCommentLength(!!e.target.value.length);
  };

  const handleCancel = () => {
    setIsCommentFocused(false);
    setNewComment("");
  };

  const handleSubmit = () => {
    const newEntry: SingleComment = {
      id: `${Date.now()}`,
      snippet: {
        topLevelComment: {
          snippet: {
            authorDisplayName: "Amit",  
            textDisplay: newComment.trim(),
            publishedAt: new Date().toISOString(),
          },
        },
      },
    };

    setNewUserComments((prev) => [newEntry, ...prev]);
    setCommentLength(false);
    setNewComment("");
  };

  const renderComments = [...newUserComments, ...displayedComments];

  return (
    <div className="mt-6 mb-8">
      {/* Comment Count */}
      <h1 className="font-semibold mb-4 text-lg">
        {renderComments.length.toLocaleString()} Comments
      </h1>

      {/* Input Section */}
      <div className="flex flex-col gap-2">
        <div
          className={`${
            isCommentFocused ? "" : "flex"
          } items-center justify-start gap-4`}
        >
          <p className={`${isCommentFocused ? "" : "hidden"} text-sm mb-2`}>
            Commenting as
          </p>
          <div className="flex gap-2 items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-500 text-white font-semibold">
              A
            </div>
            <h2 className={`text-sm ${isCommentFocused ? "" : "hidden"}`}>
              Amit Rijal
            </h2>
            <MdOutlineEdit
              size={20}
              className={`${isCommentFocused ? "" : "hidden"}`}
            />
          </div>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleChange}
            onFocus={handleCommentInputFocus}
            className="w-full border-b-1 border-gray-300 py-1 outline-none placeholder-gray-300 placeholder:text-sm text-sm"
          />
        </div>

        {/* Action buttons */}
        <div
          className={`${isCommentFocused ? "flex justify-between" : "hidden"}`}
        >
          <div className="flex items-center gap-2">
            <HiOutlineEmojiHappy size={25} />
            <p className="text-xs text-gray-500">
              By completing this action you are creating a{" "}
              <a
                className="text-blue-600"
                href="https://support.google.com/youtube/answer/1646861?topic=3024170&hl=en-GB"
              >
                channel
              </a>{" "}
              and agree to{" "}
              <a
                className="text-blue-600"
                href="http://www.youtube.com/t/terms"
              >
                YouTube's Terms of Service
              </a>
              .
            </p>
          </div>
          <div className="flex gap-2">
            <button
              className="px-3 py-2 bg-white text-xs rounded-2xl font-bold hover:bg-gray-200 cursor-pointer"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className={`px-3 py-2 text-xs rounded-2xl font-bold ${
                commentLength
                  ? "text-white bg-blue-600"
                  : "bg-gray-100 text-gray-400"
              } cursor-pointer`}
            >
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div className="mt-6">
        {renderComments.map((c, i) => {
          const snippet = c.snippet.topLevelComment.snippet;
          return (
            <div key={i} className="mb-4">
              <div className="flex items-center justify-start gap-4">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-teal-500 text-white font-semibold overflow-hidden">
                  <img
                    src={`https://picsum.photos/300/200?random=${Math.floor(
                      Math.random() * 10
                    )}`}
                    alt=""
                    className="h-full w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="font-medium">
                      {snippet.authorDisplayName}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      {new Date(snippet.publishedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-[14px]">{snippet.textDisplay}</p>
                  <div className="flex gap-3 items-center">
                    <HiOutlineThumbUp size={18} />
                    <span>{snippet.likeCount}</span>
                    <HiOutlineThumbDown size={18} />
                    <a href="#" className="text-sm font-semibold">
                      Reply
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Loading Spinner */}
        {loading && (
          <div className="flex justify-center items-center py-6 text-blue-500">
            <svg
              className="animate-spin h-6 w-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="text-sm">Loading more comments...</span>
          </div>
        )}

        {/* No more comments */}
        {!hasMore && (
          <div className="text-center text-gray-500 text-sm py-4">
            🎉 You've reached the end of comments.
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoComments;
