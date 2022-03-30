import { useVideoContext, useAuthContext } from "../../context/context";
import { FaTrash } from "../../icons/icons";
import { removeLikedVideoCall } from "../../utils/utils";
export function LikeMenuBtn({ videoId }) {
  const { dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeLikedVideoCall(videoId, userState?.id, dispatch)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
