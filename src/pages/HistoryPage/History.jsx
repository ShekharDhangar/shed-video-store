import { emptyImage2 } from "../../assets/images";
import { HistoryMenuBtn, Navbar, Sidebar, VideoCard } from "../../components/components";
import { Link } from "react-router-dom";
import {useAuthContext, useVideoContext } from "../../context/context";
import "./History.css";
import { useScrollToTop } from "../../hooks/customHooks";
import { clearHistoryCall } from "../../utils/utils";

export function History() {
  const { videoStates,dispatch } = useVideoContext();
  const { history } = videoStates;
  const {userState}=useAuthContext();
  
  useScrollToTop([history]);

  return (
    <>
      <Navbar />
      <div className="top"></div>
      {history.length>0 && (<div className="flex"><div onClick={()=>clearHistoryCall(userState?.id,dispatch)} className="btn btn-xs plain-btn">Clear All</div></div>)}
    
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
