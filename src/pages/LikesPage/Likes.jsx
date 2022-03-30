import { emptyImage2 } from "../../assets/images";
import {
  LikeMenuBtn,
  Navbar,
  Sidebar,
  VideoCard,
} from "../../components/components";
import { Link } from "react-router-dom";
import { useVideoContext } from "../../context/context";
import "./Likes.css";
import { useScrollToTop } from "../../hooks/customHooks";

export function Likes() {
  const { videoStates } = useVideoContext();
  const { videos } = videoStates;
  const likeVideos = videos.filter((video) => video.isLiked);
  useScrollToTop();

  return (
    <>
      <Navbar />
      <div className="top"></div>
      <main className="main-wrapper">
        <Sidebar />
        <section className="content-wrapper">
          <div className="flex card-grid">
            {likeVideos?.map((video) => (
              <VideoCard
                key={video._id}
                videoDetails={video}
                MenuBtn={LikeMenuBtn}
              />
            ))}
            {likeVideos.length === 0 && (
              <div className="flex empty-page-box">
                <h1 className="empty-page-title">
                  Like Videos Is Currently Empty !
                </h1>
                <img
                  className="flex empty-page-image"
                  src={emptyImage2}
                  alt="empty Like Videos"
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
