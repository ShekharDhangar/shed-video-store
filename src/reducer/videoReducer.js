function videoReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CATEGORIES": {
      return { ...state, categories: payload };
    }
    case "LOAD_VIDEOS": {
      return {
        ...state,
        videos: payload,
        videosLoading: false,
      };
    }

    case "SET_PLAYLISTS": {
      return { ...state, playlists: payload };
    }
    
    case "SET_HISTORY":{
      return {
        ...state,
        history:payload,
      }
    }
    case "SET_WATCHLATER":{
      return {
        ...state,
        watchLater:payload,
      }
    }
    
    case "SET_LIKES":{
      return {
        ...state,
        likes:payload,
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
