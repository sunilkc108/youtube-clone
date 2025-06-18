import useFetch from "./useFetch";
import { fetchCommentsByVideoId } from "../services/videoService";
import type { SingleComment } from "../types";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

const useCommentByVideoId = () => {
  const { id } = useParams();
  
  const fetchFn = useCallback(() => {
    if (!id) return Promise.resolve([]);
    return fetchCommentsByVideoId(id!);
  }, [id])
  return useFetch<SingleComment[]>(fetchFn);
};

export default useCommentByVideoId;
