import "../AddPlaylistBox/AddPlaylistBox.css";
import { AiFillCloseCircle, AiOutlinePlus } from "../../icons/icons";
import { useState } from "react";

function AddToPlaylistBox({ setShowPlaylistMenu }) {
  const [showPlayListForm, setShowPlayListForm] = useState(false);
  return (
    <div className="grid overlay-box">
      <div className="flex add-playlist-box txt-sm">
        <li className="flex icon-box">
          <span className="txt-md"> Save to... </span>
          <AiFillCloseCircle
            className="icon close-icon "
            onClick={() => setShowPlaylistMenu(false)}
          />
        </li>
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
        {!showPlayListForm && (
          <li onClick={()=>setShowPlayListForm(true)} className="flex icon-box pointer">
            <AiOutlinePlus className="icon size-xs" />
            <span className="txt-md">Create New Playlist</span>
          </li>
        )}
        {showPlayListForm && (
          <div className="create-playlist-form">
            <form>
              <input type="text" className="playlist-input" required placeholder="Enter Playlist Name" />
              <button type="submit" className="btn btn-sm">
                Create
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
export { AddToPlaylistBox };
