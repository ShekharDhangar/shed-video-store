import { Navbar ,Sidebar, VideoCard} from "../../components/components";
import { useVideoContext } from "../../context/context";

export function WatchLater(){
    const { videoStates } = useVideoContext();
    const { watchLater, videosLoading } = videoStates;
    return (
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
        </>
    )
}