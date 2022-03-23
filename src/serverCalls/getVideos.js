import axios from "axios"
async function getVideos(){
    try {
        const response = await axios.get("/api/videos") 
        if(response.status==200){
            return response.data.videos;
        }
    } catch (error) {
     console.log(error);
    }
}
export {getVideos}