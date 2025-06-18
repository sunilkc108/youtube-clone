import useFetch from "./useFetch";
import { fetchVideoById } from "../services/videoService";
import { type Video } from "../types";
import { useParams } from "react-router-dom";
import { useCallback } from "react";

const useFindVideoById = () => {
    const { id } = useParams()
    const fetchById = useCallback(() => fetchVideoById(id!), [id])
    return useFetch<Video>(fetchById)
}

export default useFindVideoById;