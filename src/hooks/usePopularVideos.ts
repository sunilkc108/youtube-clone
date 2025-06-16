import useFetch from "./useFetch";
import { fetchPopularVideos } from "../services/videoService";
import { type Video } from "../types";

const usePopularVideos = () => {
    return useFetch<Video[]>(fetchPopularVideos)
}

export default usePopularVideos;