import "./SingleVideoPlayer.css";
import ReactPlayer from "react-player/youtube";
import { useVideoContext } from "../../context/context";
export function SingleVideoPlayer({ videoId }) {
    const {videoStates}=useVideoContext();
  const {videos}=videoStates;
    const foundVideo = videos?.find(video=>video._id===videoId);

  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        width="100%"
        height="100%"
        playing={true}
        light={foundVideo?.img}
        url={`https://www.youtube.com/embed/${videoId}`}
        controls={true}
      />
    </div>
  );
}
