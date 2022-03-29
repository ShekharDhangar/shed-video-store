import "./SingleVideoPage.css";
import { useParams } from "react-router-dom";
import { FaHeart,ImClock, RiPlayListAddLine } from "../../icons/icons";
import { useState } from 'react';
import {
  Navbar,
  Sidebar,
  SingleVideoPlayer,
  AddToPlaylistBox,
  VideoCard,
} from "../../components/components";
import { useVideoContext } from "../../context/videoContext";
import { getCategorisedData, getShuffleArr } from "../../utils/utilCalls";
export function SingleVideoPage() {
  const { videoId } = useParams();
  const {videoStates}=useVideoContext();
  const {videos}=videoStates;
  const foundVideo = videos?.find(video=>video._id===videoId);
  const [showPlaylistForm,setPlaylistForm]=useState(false)
  const videoCategory = foundVideo?.category;
  const categorisedVideos = getCategorisedData(videos,videoCategory);
  const alteredVideos = categorisedVideos.slice(0,4);
  
  const shuffledArr = getShuffleArr(alteredVideos);
  return (
    <>
      <Navbar />
      <main className="main-wrapper">
        <Sidebar />
        <section className="video-content-wrapper">
          <div className="video-box">
            <SingleVideoPlayer videoId={videoId} />
              <p className="txt-md p-1 lt-bold">{foundVideo?.title}</p>
            <span className="txt-sm creator-txt lt-bold ">~{foundVideo?.creator}</span>            
            <div className="flex btn-grp gap">
              <button className="btn btn-xs txt-sm plain-btn">
                <FaHeart className='icon size-xs'/>
                 <span>
                    Like
                   </span>
              </button>
              <button className="btn btn-xs txt-sm plain-btn">
                <ImClock className='icon size-xs'/>
                Watchlater
              </button>
              <button onClick={()=>setPlaylistForm(true)} className="btn btn-xs txt-sm plain-btn">
                <RiPlayListAddLine  className='icon size-xs'/>
                Save
              </button>
              {showPlaylistForm && < AddToPlaylistBox setShowPlaylistMenu={setPlaylistForm} video={foundVideo} /> }
            </div>
          </div>
          <div className="flex card-grid feature-videos">
            {shuffledArr.map(item=><VideoCard videoDetails={item} key={item._id} />)}
          </div>
        </section>
      </main>
    </>
  );
}
