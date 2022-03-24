import { AiOutlineHome,MdOutlineExplore ,MdOutlineFeaturedPlayList,ImClock} from "../../icons/icons";
import "./Sidebar.css"
function Sidebar() {
  return (
    <>
    <div className="flex sidebar-container">
      <div className="flex sidebar-icon-container">
        <AiOutlineHome className="icon size-xs" />
        <span className="lt-bold nav-icon-txt" >Home</span>
      </div>
      <div className="flex sidebar-icon-container">
          <MdOutlineExplore className="icon size-xs"/>
          <span className="lt-bold nav-icon-txt" >Explore</span>
      </div>
      <div className="flex sidebar-icon-container">
          <MdOutlineFeaturedPlayList className="icon size-xs"/>
          <span className="lt-bold nav-icon-txt" >Playlist</span>
      </div>
      <div className="flex sidebar-icon-container">
          <ImClock className="icon size-xs history-icon  "/>
          <span className="lt-bold nav-icon-txt" >History</span>
      </div>
    </div>
   
    </>
  );
}

export { Sidebar };
