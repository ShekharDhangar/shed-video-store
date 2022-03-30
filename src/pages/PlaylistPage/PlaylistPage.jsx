import {  emptyImage2 } from "../../assets/images";
import {
  Navbar,
  Sidebar,
  PlaylistPageCard,
} from "../../components/components";
import { useVideoContext } from "../../context/context";
import { Link } from "react-router-dom";
export function Playlist() {
  const { videoStates } = useVideoContext();
  const { playlists  } = videoStates;
  return (
    <>
    <Navbar />
  <main className="main-wrapper">
    <Sidebar />
    <div className="content-wrapper" >
      {playlists.length===0 && (
        <div className="flex empty-page-box" >
        <h1 className="empty-page-title" >YOU HAVE 0 PLAYLISTS !</h1>
        <img className="flex empty-page-image" src={emptyImage2} alt="empty playlist" />
        <Link to="/explore">
        <button className="btn btn-sm ">View Videos</button>
        </Link>
      </div>
      ) }
        <section className="flex card-grid">
          {playlists?.map((playlistItem) =>
          <PlaylistPageCard key={playlistItem._id}  card={playlistItem} />
          )}
        </section>
        </div>
      </main>
    </> 
  );
}
