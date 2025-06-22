import type { Video } from "../../types";

export type VideoState = {
  videos: Video[];
};

export const initialState: VideoState = { videos: [] };

export const videoReducer = (state: VideoState, action: any) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };
    case "SET_SELECTED_VIDEO":
      return { ...state, selectedVideo: action.payload };
    case "RESET_VIDEO":
      return { ...state, videos: [] };
    default:
      return state;
  }
};
