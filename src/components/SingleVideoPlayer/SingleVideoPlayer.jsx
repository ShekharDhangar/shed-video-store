import "./SingleVideoPlayer.css";
import ReactPlayer from "react-player/youtube";
import { useVideoContext, useAuthContext } from "../../context/context";
import { addToHistoryCall } from "../../utils/utils";
import { useScrollToTop } from "../../hooks/customHooks";
export function SingleVideoPlayer({ videoId }) {
  const { videoStates, dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  const { videos } = videoStates;
  const foundVideo = videos?.find((video) => video._id === videoId);
  const videoPlayed = () => addToHistoryCall(foundVideo, userState?.id, dispatch);
  useScrollToTop();
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        playing={true}
        light={foundVideo?.img}
        onStart={videoPlayed}
        url={`https://www.youtube.com/embed/${videoId}`}
        controls={true}
      />
    </div>
  );
}
