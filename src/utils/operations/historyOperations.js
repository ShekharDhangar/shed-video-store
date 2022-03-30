import { addToHistory,removeFromHistory,clearHistory } from "../../serverCalls/serverCalls";
export async function addToHistoryCall(video,encodedToken,dispatch){
    try {
        const response = await addToHistory(video,encodedToken);
        if(response){
          dispatch({type:"SET_HISTORY",payload:response.data.history});
        }
      } catch (error) {
        console.log(error)
      }
};

export async function removeFromHistoryCall(video,encodedToken,dispatch){
    try {
        const response = await removeFromHistory(video,encodedToken);
        if(response){
          dispatch({type:"SET_HISTORY",payload:response.data.history});
        }
      } catch (error) {
        console.log(error)
      }
};

export async function clearHistoryCall(encodedToken,dispatch){
    try {
        const response = await clearHistory(encodedToken);
        if(response){
          dispatch({type:"SET_HISTORY",payload:response.data.history});
        }
      } catch (error) {
        console.log(error)
      }
};

