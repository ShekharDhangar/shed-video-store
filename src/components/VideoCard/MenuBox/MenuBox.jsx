import { useState } from "react";
import axios from "axios";

import {ImClock,RiPlayListAddLine} from "../../../icons/icons";
import "./MenuBox.css"
export function MenuBox({setStatePlaylistMenu,setStateMenu,video}){
    const [addingToWatchLater,setAddingToWatchLater]=useState(false);
    async function addToWatchLaterHandle(){
        
    }
    return (
        <div className="absolute inset-0 flex video-card-btns">
            <button onClick={addToWatchLaterHandle} className="btn txt-sm plain-btn">
              <ImClock /> Add to watch later
            </button>
            <button
              onClick={() => {setStatePlaylistMenu(true); setStateMenu(false) }}
              className="w-100 btn txt-sm plain-btn" >
              <RiPlayListAddLine className="icon" /> Add to playlist{" "}
            </button>
          </div>
    )
}