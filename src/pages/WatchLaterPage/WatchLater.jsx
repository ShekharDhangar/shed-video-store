import { Navbar ,Sidebar, VideoCard, WatchLaterMenuBtn} from "../../components/components";
import { useVideoContext } from "../../context/context";
import { useScrollToTop } from "../../hooks/customHooks";

export function WatchLater(){
    const { videoStates } = useVideoContext();
  const { videos } = videoStates;
  const watchLaterVideos = videos.filter((video) => video.isInWatchLater);
  useScrollToTop();
    return (
        <>
        <Navbar />
        <div className="top"></div>
        <main className="main-wrapper">
          <Sidebar />
          <section className="content-wrapper">
            <div className="flex card-grid">
            {watchLaterVideos?.map((video) => (
              <VideoCard
                key={video._id}
                videoDetails={video}
                MenuBtn={WatchLaterMenuBtn}
              />
            ))}
                </div>
            </section>
            </main>
        </>
    )
}