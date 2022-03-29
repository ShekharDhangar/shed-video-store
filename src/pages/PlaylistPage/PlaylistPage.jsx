import { Navbar ,Sidebar, VideoCard} from "../../components/components";
import { useVideoContext } from "../../context/videoContext";
import { useState } from "react";
export function Playlist(){
    const { videoStates } = useVideoContext();
    const { videos,watchLater, videosLoading } = videoStates;
    const [playlists,setPlaylists]=useState([]);
    
    return  (
    <>
    <Navbar/>
    <main className="flex main-wrapper">
        <Sidebar/>
        <section className="flex card-grid">
        {videosLoading ? (
          <Loading width="150px" height="150px" />
        ) : (
            watchLater?.map(video => <VideoCard key={video._id} videoDetails={video} />)
        )}
        </section>
        </main>
    </>)
}
