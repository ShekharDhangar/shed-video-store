import { Navbar,Sidebar, VideoCard ,Loading} from "../../components/components";
import { useVideoContext } from "../../context/videoContext";
function VideoListing(){
    const { videoStates } = useVideoContext();
    const { videos, videosLoading } = videoStates;
    return (
        <>
        <Navbar/>
          <main className="flex main-wrapper">
              <Sidebar/>
              <div className="flex card-grid">
            {videosLoading ? (
              <Loading width="150px" height="150px" />
            ) : (
              videos.map(video => <VideoCard key={video._id} videoDetails={video} />)
            )}
          </div>
        </main>
        </>
    )
}

export {VideoListing}