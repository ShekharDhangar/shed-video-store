import { addToWatchLater,removeFromWatchLater} from "../../serverCalls/serverCalls";
export async function addToWatchLaterCall(video,encodedToken,dispatch){
    try {
        const response = await addToWatchLater(video,encodedToken);
        if(response){
          dispatch({type:"SET_WATCHLATER",payload:response.data.watchlater});
        }
      } catch (error) {
        console.log(error)
      }
};

export async function removeFromWatchLaterCall(video,encodedToken,dispatch){
    try {
        const response = await removeFromWatchLater(video,encodedToken);
        if(response){
          dispatch({type:"SET_WATCHLATER",payload:response.data.watchlater});
        }
      } catch (error) {
        console.log(error)
      }
};

