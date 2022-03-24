import "./VideoCard.css";
import {
  BsThreeDotsVertical,
  RiPlayListAddLine,
  ImClock,
} from "../../icons/icons";
import { useState } from "react";
import { AddToPlaylistBox } from "../components";

function VideoCard({videoDetails}) {
  const [ShowMenu, setShowMenu] = useState(false);
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);
  return (
    <div className="video-card">
      <div className="w-100 h-100 video-img-container">
        <img src={videoDetails.gif} alt="video Image" />
      </div>
      <div className="relative flex video-details">
        <div className="avatar-container size-sm txt-avatar flex">
          <span>S</span>
        </div>
        <div className=" flex video-desc-box">
          <p className="video-title">{videoDetails.title}</p>
          <p className="creator-name">~{videoDetails.creator}</p>
        </div>
        <BsThreeDotsVertical
          onClick={() => setShowMenu(prev => !prev)}
          className="icon size-xs"
        />
        {ShowMenu && (
          <div className="absolute inset-0 flex video-card-btns">
            <button className="btn txt-sm plain-btn">
              <ImClock /> Add to watch later
            </button>
            <button
              onClick={() => {setShowPlaylistMenu(true); setShowMenu(false) }}
              className="w-100 btn txt-sm plain-btn" >
              <RiPlayListAddLine className="icon" /> Add to playlist{" "}
            </button>
          </div>
        )}
      </div>  
      {showPlaylistMenu && (< AddToPlaylistBox  setShowPlaylistMenu={setShowPlaylistMenu} />)}
    </div>
  );
}

export { VideoCard };
