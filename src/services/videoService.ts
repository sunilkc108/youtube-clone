import axiosInstance from "../api/youtubeApi";
import { type SingleComment, type Video } from "../types";

export const fetchPopularVideos = async (): Promise<Video[]> => {
  const res = await axiosInstance.get("videos", {
    params: {
      part: "snippet,statistics",
      chart: "mostPopular",
      maxResults: 20,
      regionCode: "IN",
    },
  });

  return res.data.items;
};

export const searchVideos = async (query: string): Promise<Video[]> => {
  const res = await axiosInstance.get("search", {
    params: {
      part: "snippet",
      q: query,
      maxResults: 20,
      type: "video",
    },
  });

  const searchItems = res.data.items;

  // Extract all videoIds from the search response
  const videoIds = searchItems.map((item: any) => item.id.videoId).join(",");

  // Now get full video details (including statistics)
  const detailsRes = await axiosInstance.get("videos", {
    params: {
      part: "snippet,statistics",
      id: videoIds,
    },
  });

  return detailsRes.data.items;
};

export const fetchVideoById = async (id: string): Promise<Video> => {
  const res = await axiosInstance.get("videos", {
    params: {
      part: "snippet,statistics",
      id,
    },
  });

  return res.data.items[0];
};

export const fetchVideoTags = async (tags: string[]): Promise<Video[]> => {
  if (tags.length === 0) return [];

  const searchQuery = tags.slice(0, 10).join(" ");
  const res = await axiosInstance.get("search", {
    params: {
      part: "snippet",
      maxResults: 20,
      q: searchQuery,
      type: "video",
    },
  });

  const videoIds = res.data.items
    .map((item: any) => item.id.videoId)
    .filter(Boolean)
    .join(",");

  if (!videoIds) return [];

  // Step 2: Fetch full video data including tags
  const videosRes = await axiosInstance.get("videos", {
    params: {
      part: "snippet,statistics",
      id: videoIds,
    },
  });

  return videosRes.data.items;
};

export const fetchCommentsByVideoId = async (
  id: string
): Promise<SingleComment[]> => {
  const res = await axiosInstance.get("commentThreads", {
    params: {
      part: "snippet",
      videoId: id,
      maxResults: 20,
    },
  });

  return res.data.items as SingleComment[];
};

// ......................................... Future ...............................
// fetchSuggestedVideos(id)
// fetchChannelDetails(channelId)
// ......................................... Future ...............................
