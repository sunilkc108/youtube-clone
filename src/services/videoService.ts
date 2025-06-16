import axiosInstance from "../api/youtubeApi"
import { type Video } from "../types";

export const fetchPopularVideos = async (): Promise<Video[]> => {
    const res = await axiosInstance.get("videos", {
        params: {
            part: "snippet,statistics",
            chart: "mostPopular",
            maxResults: 20,
            regionCode: "NP"
        }
    })

    return res.data.items;
}

export const searchVideos = async (query: string) => {
    const res = await axiosInstance.get("search", {
        params: {
            part: "snippet",
            q: query,
            maxResults: 20,
            type: 'video'
        }
    })

    return res.data.items;
}

export const fetchVideoById = async (id: string) => {
    const res = await axiosInstance.get("videos", {
        params: {
            part: "snippet,statistics",
            id
        }
    })

    return res.data.items
}

// ......................................... Future ...............................
// fetchSuggestedVideos(id)
// fetchChannelDetails(channelId)
// ......................................... Future ...............................