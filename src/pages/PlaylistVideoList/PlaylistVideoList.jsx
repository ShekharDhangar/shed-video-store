import {
  Navbar,
  VideoCard,
  Sidebar,
  PlaylistMenuBtn,
} from "../../components/components";
import { useParams,Link } from "react-router-dom";
import { useVideoContext } from "../../context/videoContext";
import { emptyImage2 } from "../../assets/images";
export function PlayListVideoList() {
  const { playlistId } = useParams();
  const { videoStates } = useVideoContext();
  const { playlists } = videoStates;
  const foundPlaylist = playlists.find((list) => list._id === playlistId);
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <Sidebar />
        <section className="content-wrapper">
          <div className="flex card-grid">
            {foundPlaylist.videos?.map((video) => (
              <VideoCard
                key={video._id}
                MenuBtn={PlaylistMenuBtn}
                videoDetails={video}
              />
            ))}
            {foundPlaylist.videos.length===0 && (
              <div className="flex empty-page-box" >
              <h1 className="empty-page-title" >This Playlist is Currently Empty !</h1>
              <img className="flex empty-page-image" src={emptyImage2} alt="empty playlist" />
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