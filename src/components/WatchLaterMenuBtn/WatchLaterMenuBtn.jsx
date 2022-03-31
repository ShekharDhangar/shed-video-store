import { useVideoContext, useAuthContext } from "../../context/context";
import { removeFromWatchLaterCall } from "../../utils/utils";

export function WatchLaterMenuBtn({ videoID }) {
  const { dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeFromWatchLaterCall(videoID, userState?.id, dispatch)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
