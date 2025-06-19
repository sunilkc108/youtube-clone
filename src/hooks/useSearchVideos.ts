// import { useState } from "react";
import useFetch from "./useFetch";
import { searchVideos } from "../services/videoService";
import type { Video } from "../types";
import { useCallback } from "react";

const useSearchVideos = (query: string) => {
  const fetchVideos = useCallback(() => searchVideos(query), [query]);
  return useFetch<Video[]>(fetchVideos);
};

export default useSearchVideos;
