import { addToWatchLater,removeFromWatchLater} from "../../serverCalls/serverCalls";
import { isPresentInState } from "../utilCalls";
export async function addToWatchLaterCall(video,encodedToken,setState){
    try {
        const response = await addToWatchLater(video,encodedToken);
        if(response){
          setState(response.data.watchlater);
        }
      } catch (error) {
        console.log(error)
      }
};

export async function removeFromWatchLaterCall(videoID,encodedToken,setState){
    try {
        const response = await removeFromWatchLater(videoID,encodedToken);
        if(response){
          setState(response.data.watchlater);
        }
      } catch (error) {
        console.log(error)
      }
};


export const watchLaterHandler = (state,video, encodedToken, setState) =>{
  const isVideowatchLater = isPresentInState(state,video);
  isVideowatchLater
  ? removeFromWatchLaterCall(video._id, encodedToken, setState)
  : addToWatchLaterCall(video, encodedToken, setState);
}
