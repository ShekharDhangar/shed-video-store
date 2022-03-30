import { addLikedVideo, removeLikedVideo } from "../../serverCalls/serverCalls";

export async function addLikedVideoCall(video, encodedToken, dispatch) {
  try {
    const response = await addLikedVideo(video, encodedToken);
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
    if (response) {
      dispatch({ type: "SET_LIKES", payload: response.data.likes });
    }
  } catch (error) {
    console.log(error);
  }
}

export const likeHandler = (video, encodedToken, dispatch) =>{
    console.log('called',video.isLiked);
    video.isLiked
    ? removeLikedVideoCall(video._id, encodedToken, dispatch)
    : addLikedVideoCall(video, encodedToken, dispatch);
}
