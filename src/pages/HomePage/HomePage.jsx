import { heroImg } from "../../assets/images";
import { Navbar, Sidebar, VideoCard } from "../../components/components";
import { Loading } from "../../components/Loading/Loading";
import { useVideoContext } from "../../context/videoContext";
import "./HomePage.css";
function HomePage() {
  const { videoStates } = useVideoContext();
  const { videos, videosLoading } = videoStates;
  const alteredVideos = videos.slice(0,12);

  return (
    <>
      <Navbar />
      <main className="flex main-wrapper">
        <Sidebar />
        <div>
          <div className="pointer relative flex display-img-container w-100">
            <img
              src="https://images6.alphacoders.com/542/thumb-1920-542776.jpg"
              className="display-img"
              alt=""
            />
          </div>
          <div className="flex card-grid">
            {videosLoading ? (
              <Loading width="150px" height="150px" />
            ) : (
              alteredVideos.map((video) => <VideoCard key={video._id} videoDetails={video} />)
            )}
          </div>
        </div>
      </main>
    </>
  );
}

export { HomePage };
