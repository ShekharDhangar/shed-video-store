function videoReducer(state,{type,payload}){
    switch (type){
        case "LOAD_VIDEOS":{
            return {...state,videos:payload,videosLoading:false};
        }
        case "SAVE_TO_WATCHLATER":{
            return {...state,watchLater:payload}
        }
        default:
            return state;
    }
}

export {videoReducer};