import { useWatchLaterContext, useAuthContext } from "../../context/context";
import { removeFromWatchLaterCall } from "../../utils/utils";

export function WatchLaterMenuBtn({ videoID }) {
  const {setWatchLater}=useWatchLaterContext()
  const { userState } = useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeFromWatchLaterCall(videoID, userState?.id, setWatchLater)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
