import { emptyImage2 } from "../../assets/images";
import { HistoryMenuBtn, Navbar, Sidebar, VideoCard } from "../../components/components";
import { Link } from "react-router-dom";
import { useVideoContext } from "../../context/context";
import "./History.css";
import { useScrollToTop } from "../../hooks/customHooks";

export function History() {
  const { videoStates } = useVideoContext();
  const { history } = videoStates;
  useScrollToTop();

  return (
    <>
      <Navbar />
      <div className="top"></div>
      <main className="flex main-wrapper">
        <Sidebar />
        <section className="content-wrapper">
          <div className="flex card-grid history-videos">
            {history?.map((video) => (
              <VideoCard key={video._id} videoDetails={video} MenuBtn={HistoryMenuBtn} />
            ))}
            {history.length === 0 && (
              <div className="flex empty-page-box">
                <h1 className="empty-page-title">
                  History Is Currently Empty !
                </h1>
                <img
                  className="flex empty-page-image"
                  src={emptyImage2}
                  alt="empty history"
                />
                <Link to="/explore">
                  <button className="btn btn-sm ">View Videos</button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
