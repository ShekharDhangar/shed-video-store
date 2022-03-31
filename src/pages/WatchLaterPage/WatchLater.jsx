import { Navbar ,Sidebar, VideoCard, WatchLaterMenuBtn} from "../../components/components";
import { useWatchLaterContext } from "../../context/context";
import { useScrollToTop } from "../../hooks/customHooks";

export function WatchLater(){
    const {WatchLater}=useWatchLaterContext()
  useScrollToTop();
    return (
        <>
        <Navbar />
        <div className="top"></div>
        <main className="main-wrapper">
          <Sidebar />
          <section className="content-wrapper">
            <div className="flex card-grid">
            {WatchLater?.map((video) => (
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