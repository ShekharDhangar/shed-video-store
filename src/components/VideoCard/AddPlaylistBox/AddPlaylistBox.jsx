import "./AddPlaylistBox.css";
import { AiOutlineCloseCircle} from "../../../icons/icons";

function AddToPlaylistBox({ setShowPlaylistMenu }) {
  const newPlaylistHandler=(e)=>{
    e.preventDefault();
  }
  return (
    <div className="grid overlay-box">
      <div className="flex add-playlist-box txt-sm">
        <li className="flex icon-box">
          <span className="txt-md"> Save to... </span>
          <AiOutlineCloseCircle
            className="icon icon-close "
            onClick={() => setShowPlaylistMenu(false)}
          />
        </li>
            <form onSubmit={(e)=>newPlaylistHandler(e)} className="create-playlist-form">
        <div className="flex txt-md playlist-list">
          <label >
            <input type="checkbox" className="checkbox" />
            Watch Later
          </label>
          <label>
            <input type="checkbox" className="checkbox" />
            Playlist
          </label>
        </div>
              <input type="text" className="playlist-input" required placeholder="Enter Playlist Name" />
              <button type="submit" className="btn btn-sm">
                Create
              </button>
            </form>
      </div>
    </div>
  );
}
export { AddToPlaylistBox };
