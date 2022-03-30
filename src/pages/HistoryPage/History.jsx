import { Navbar ,Sidebar, VideoCard} from "../../components/components";
import { useVideoContext } from "../../context/context";

export function History(){
    const { videoStates } = useVideoContext();
    const { history, videosLoading } = videoStates;
    return (
        <>
        <Navbar/>
        <main className="flex main-wrapper">
            <Sidebar/>
            <section className="flex card-grid">
            {videosLoading ? (
              <Loading width="150px" height="150px" />
            ) : (
                history?.map(video => <VideoCard key={video._id} videoDetails={video} />)
            )}
            </section>
            </main>
        </>
    )
}