import { useLikesContext, useAuthContext } from "../../context/context";
import { FaTrash } from "../../icons/icons";
import { removeLikedVideoCall } from "../../utils/utils";
export function LikeMenuBtn({ videoId }) {
  const {setLikes}=useLikesContext()
  const { userState } = useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeLikedVideoCall(videoId, userState?.id, setLikes)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
