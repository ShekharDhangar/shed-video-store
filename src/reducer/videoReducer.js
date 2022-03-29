function videoReducer(state, { type, payload }) {
  switch (type) {
    case "SET_CATEGORIES":{
      return {...state,categories:payload}
    }
    case "LOAD_VIDEOS": {
      return { ...state, videos: payload, videosLoading: false };
    }
    case "SAVE_TO_WATCHLATER": {
      return { ...state, watchLater: payload };
    }
    case "SET_PLAYLISTS": {
      return { ...state, playlists: payload };
    }
    case "ACTION_PLAYLIST":{
      return {...state,
      playlists:state.playlists.map(playlistItem=>playlistItem._id===payload._id?payload:playlistItem)};
    }
    // case "REMOVE_VIDEO_TO_PLAYLIST": {
    //     return {
    //        ...state,
    //        playlists: state.playlists.reduce((acc, curr) => {
    //          curr._id === payload.playlistId
    //            ? (acc = [...acc, payload.addedPlaylistVideo])
    //            : (acc = [...acc, curr]);
    //        }, []),
    //      };
    //    }
    default:
      return state;
  }
}

export { videoReducer };
