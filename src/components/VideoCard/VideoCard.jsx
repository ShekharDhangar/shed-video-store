import "./VideoCard.css";
import {
  BsThreeDotsVertical,
  RiPlayListAddLine,
  ImClock,
} from "../../icons/icons";
import { useState } from "react";
import { AddToPlaylistBox } from "../components";
import { MenuBox } from "./MenuBox/MenuBox";

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
         < MenuBox setStatePlaylistMenu={setShowPlaylistMenu} setStateMenu={setShowMenu} />
        )}
      </div>  
      {showPlaylistMenu && (< AddToPlaylistBox  setShowPlaylistMenu={setShowPlaylistMenu} />)}
    </div>
  );
}

export { VideoCard };
