import { useVideoContext, useAuthContext } from "../../context/context";
import { FaTrash } from "../../icons/icons";
import { removeFromHistoryCall } from "../../utils/utils";
export function HistoryMenuBtn({ videoId }) {
  const { dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeFromHistoryCall(videoId, userState?.id, dispatch)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
