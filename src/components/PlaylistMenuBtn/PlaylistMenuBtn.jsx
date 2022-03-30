import { useVideoContext,useAuthContext } from "../../context/context";
import {FaTrash} from "../../icons/icons";
import { useParams } from "react-router-dom";
import { removeVideoFromPlaylistCall } from "../../utils/utils";
export function PlaylistMenuBtn({videoId}){
    const {dispatch}=useVideoContext();
    const {userState}=useAuthContext();
    const {playlistId}=useParams();
    
    return (
            <button onClick={()=>removeVideoFromPlaylistCall(playlistId,videoId,userState?.id,dispatch)} className="btn txt-sm plain-btn">
              <FaTrash />
            </button>
    )
}