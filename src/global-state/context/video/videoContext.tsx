import {
  useEffect,
  createContext,
  useContext,
  useReducer,
  type Dispatch,
  type ReactNode,
} from "react";
import { videoReducer } from "../../reducer/videoReducer";
import { type VideoState, initialState } from "../../reducer/videoReducer";

const VideoContext = createContext<{
  state: VideoState;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const VideoProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideoContext = () => useContext(VideoContext);
