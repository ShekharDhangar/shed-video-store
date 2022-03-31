import "./VideoCard.css";
import {
  BsThreeDotsVertical,
} from "../../icons/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AddToPlaylistBox } from "../components";
import { MenuBox } from "./MenuBox/MenuBox";

function VideoCard({videoDetails,MenuBoxItem=MenuBox,MenuBtn}) {
  const [ShowMenu, setShowMenu] = useState(false);
  const navigate = useNavigate()
  const [showPlaylistMenu, setShowPlaylistMenu] = useState(false);
  return (
    <div className="video-card">
      <div className="w-100 h-100 video-img-container">
        <img onClick={()=>navigate(`/${videoDetails._id}`)} src={videoDetails.img} className="res" alt="video Image" />
      </div>
      <div className="relative flex video-details">
        <div className="avatar-container size-sm txt-avatar flex">
          <span>S</span>
        </div>
        <div className=" flex video-desc-box">
          <p className="video-title">{videoDetails.title}</p>
          <p className="creator-name">~{videoDetails.creator}</p>
        </div>
        {!MenuBtn && (
          <BsThreeDotsVertical
          onClick={() => setShowMenu(prev => !prev)}
          className="icon size-xs"
          />
          )}
          {MenuBtn && <MenuBtn videoId={videoDetails._id}/>}
        {ShowMenu && (
         < MenuBoxItem video={videoDetails} setStatePlaylistMenu={setShowPlaylistMenu} setStateMenu={setShowMenu} />
        )}
      </div>  
      {showPlaylistMenu && (< AddToPlaylistBox video={videoDetails} setShowPlaylistMenu={setShowPlaylistMenu} />)}
    </div>
  );
}

export { VideoCard };
