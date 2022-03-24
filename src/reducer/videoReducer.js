function videoReducer(state,{type,payload}){
    switch (type){
        case "LOAD VIDEOS":{

            return {...state,videos:payload,videosLoading:false};

        }
    }
}

export {videoReducer};