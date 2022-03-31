import { useAuthContext, useVideoContext } from "../../../context/context";
import { FaTrash, ImClock, RiPlayListAddLine } from "../../../icons/icons";
export function MenuBox({ setStatePlaylistMenu, setStateMenu, video }) {
  const { videoStates, dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  const isVideoInWatchLater = video.isInWatchLater;
  return (
    <div className="absolute inset-0 flex video-card-btns">
      {isVideoInWatchLater && (
        <button className="btn txt-sm plain-btn">
          <FaTrash />
          <span>Remove from WatchLater</span>
        </button>
      )}
      <button
        onClick={() => {
          setStatePlaylistMenu(true);
          setStateMenu(false);
        }}
        className="w-100 btn txt-sm plain-btn"
      >
        <RiPlayListAddLine className="icon" /> Add to playlist{" "}
      </button>
    </div>
  );
}
