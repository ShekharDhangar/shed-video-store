import { addToWatchLater,removeFromWatchLater} from "../../serverCalls/serverCalls";
export async function addToWatchLaterCall(video,encodedToken,setState){
    try {
        const response = await addToWatchLater(video,encodedToken);
        if(response){
          setState(response.data.watchlater);
        }
        console.log(response.data.watchlater,'added');
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
        console.log(response.data.watchlater,'remove')
      } catch (error) {
        console.log(error)
      }
};

