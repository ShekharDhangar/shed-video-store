import { addLikedVideo, removeLikedVideo } from "../../serverCalls/serverCalls";
import { isPresentInState } from "../utilCalls";

export async function addLikedVideoCall(video, encodedToken, dispatch) {
  try {
    const response = await addLikedVideo(video, encodedToken);
    console.log(response.data.likes)
    if (response) {
      dispatch({ type: "SET_LIKES", payload: response.data.likes });
    }

  } catch (error) {
    console.log(error);
  }
}

export async function removeLikedVideoCall(videoID, encodedToken, dispatch) {
  try {
    const response = await removeLikedVideo(videoID, encodedToken);
    console.log(response.data.likes)
    if (response) {
      dispatch({ type: "SET_LIKES", payload: response.data.likes });
    }
  } catch (error) {
    console.log(error);
  }
}

export const likeHandler = (state,video, encodedToken, dispatch) =>{
    console.log('called',video);
    const isVideoLiked = isPresentInState(state,video);
    isVideoLiked
    ? removeLikedVideoCall(video._id, encodedToken, dispatch)
    : addLikedVideoCall(video, encodedToken, dispatch);
}
