import "./SingleVideoPage.css";
import { useParams ,useNavigate} from "react-router-dom";
import { FaHeart, ImClock, RiPlayListAddLine } from "../../icons/icons";
import { useState } from "react";
import {
  Navbar,
  Sidebar,
  SingleVideoPlayer,
  AddToPlaylistBox,
  VideoCard,
} from "../../components/components";
import { useVideoContext } from "../../context/context";
import {
  getCategorisedData,
  getShuffleArr,
  findById,
} from "../../utils/utilCalls";
import { useScrollToTop } from "../../hooks/customHooks";
import { useAuthContext } from "../../context/auth-context";
import { likeHandler } from "../../utils/utils";
export function SingleVideoPage() {
  useScrollToTop();
  const { videoId } = useParams();
  const navigate = useNavigate();
  const { videoStates, dispatch } = useVideoContext();
  const { userState } = useAuthContext();
  const { videos } = videoStates;
  const foundVideo = findById(videos, videoId);
  const [showPlaylistForm, setPlaylistForm] = useState(false);
  const videoCategory = foundVideo?.category;
  const categorisedVideos = getCategorisedData(videos, videoCategory);
  const filteredVideos = categorisedVideos.filter(
    (item) => item._id !== foundVideo._id
  );
  const shuffledArr = getShuffleArr(filteredVideos);
  const alteredVideos = shuffledArr.slice(0, 3);
  const isVideoLiked = foundVideo?.isLiked;

  return (
    <>
      <Navbar />
      <div className="top"></div>
      <main className="main-wrapper">
        <Sidebar />
        <section className="video-content-wrapper">
          <div className="video-box">
            <SingleVideoPlayer videoId={videoId} />
            <p className="p-1 lt-bold single-video-title">
              {foundVideo?.title}
            </p>
            <span className="txt-sm creator-txt lt-bold ">
              ~{foundVideo?.creator}
            </span>
            <div className="flex icon-grp gap">

                <div
                  onClick={() => userState.id ?
                    likeHandler(foundVideo, userState?.id, dispatch)
                    : navigate("/login")}
                  className="flex menu-icon-box" >
                  <FaHeart className={`icon size-xs ${isVideoLiked?`liked`:""}`} />
                  <span>{isVideoLiked?`Liked`:`Like`}</span>
                </div>

              <div className="flex menu-icon-box">
                <ImClock className="icon size-xs" />
                <span>Watchlater</span>
              </div>
              <div
                onClick={() => setPlaylistForm(true)}
                className="flex menu-icon-box"
              >
                <RiPlayListAddLine className="icon size-xs" />
                <span>Save</span>
              </div>
              {showPlaylistForm && (
                <AddToPlaylistBox
                  setShowPlaylistMenu={setPlaylistForm}
                  video={foundVideo}
                />
              )}
            </div>
          </div>
          <div className="flex card-grid feature-videos">
            {alteredVideos.map((item) => (
              <VideoCard videoDetails={item} key={item._id} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
