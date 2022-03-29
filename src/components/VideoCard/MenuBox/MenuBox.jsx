import {ImClock,RiPlayListAddLine} from "../../../icons/icons";
export function MenuBox({setStatePlaylistMenu,setStateMenu}){
    return (
        <div className="absolute inset-0 flex video-card-btns">
            <button className="btn txt-sm plain-btn">
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