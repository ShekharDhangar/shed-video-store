function videoReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CATEGORIES": {
      return { ...state, categories: payload };
    }
    case "LOAD_VIDEOS": {
      return {
        ...state,
        videos: [
          ...payload.map((video) => ({
            ...video,
            isInHistory: false,
            isInWatchLater: false,
            isLiked: false,
          })),
        ],
        videosLoading: false,
      };
    }

    case "SET_PLAYLISTS": {
      return { ...state, playlists: payload };
    }
    
    case "SET_HISTORY":{
      return {
        ...state,
        videos:state.videos.map(video=>({...video,isInHistory:payload.some(item=>item._id===video._id)}))
      }
    }
    case "SET_WATCHLATER":{
      return {
        ...state,
        videos:state.videos.map(video=>({...video,isInWatchLater:payload.some(item=>item._id===video._id)}))
      }
    }
    case "SET_LIKES":{
      return {
        ...state,
        videos:state.videos.map(video=>({...video,isLiked:payload.some(item=>item._id===video._id)}))
      }
    }

    case "ACTION_PLAYLIST": {
      return {
        ...state,
        playlists: state.playlists.map((playlistItem) =>
          playlistItem._id === payload._id ? payload : playlistItem
        ),
      };
    }

    default:
      return state;
  }
}

export { videoReducer };
