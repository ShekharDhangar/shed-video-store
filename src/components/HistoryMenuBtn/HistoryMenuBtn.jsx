import { useHistoryContext, useAuthContext } from "../../context/context";
import { FaTrash } from "../../icons/icons";
import { removeFromHistoryCall } from "../../utils/utils";
export function HistoryMenuBtn({ videoId }) {
  const {setHistory}=useHistoryContext()
  const {userState}=useAuthContext();
  return (
    <div
      className="menu-icon-box"
      onClick={() => removeFromHistoryCall(videoId, userState?.id, setHistory)}
    >
      <FaTrash className="icon size-xs" />
    </div>
  );
}
