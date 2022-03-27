import { createContext, useContext, useReducer } from "react";
import { videoReducer } from "../reducer/videoReducer";
const VideoContext = createContext();
function VideoProvider({ children }) {
    const [ videoStates, dispatch] = useReducer(videoReducer,
        { videos: [], watchLater: [], playlists:[], history: [],videosLoading:true})


    return (
        <VideoContext.Provider value={{ videoStates,dispatch }}  >
            {children}
        </VideoContext.Provider>
    )
}

const useVideoContext = ()=>useContext(VideoContext);
export { VideoProvider, useVideoContext };