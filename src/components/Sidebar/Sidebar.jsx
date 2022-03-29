import { AiOutlineHome,MdOutlineExplore,FaHistory ,MdOutlineFeaturedPlayList,ImClock} from "../../icons/icons";
import "./Sidebar.css"
import {useNavigate} from "react-router-dom";
const sidebarData=[
  {
    id:1,
    navIcon: <AiOutlineHome className="icon size-xs" />,
    navTxt:"Home",
    navLink:"/",
  },
  {
    id:2,
    navIcon: <MdOutlineExplore className="icon size-xs" />,
    navTxt:"Explore",
    navLink:"/explore",
  },
  {
    id:3,
    navIcon: <MdOutlineFeaturedPlayList className="icon size-xs" />,
    navTxt:"Playlist",
    navLink:"/playlist",
  },
  {
    id:5,
    navIcon: <FaHistory className="icon size-xs clock-icon" />,
    navTxt:"History",
    navLink:"/history",
  },
]
function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className="flex sidebar-container">
    {sidebarData.map((navLink,id,navIcon,navTxt)=>(
    <div onClick={()=>navigate(navLink)} key={id} className="flex sidebar-icon-container">
        {navIcon}
        <span className="lt-bold nav-icon-txt" >{navTxt}</span>
      </div>))}
    </div>
  );
}

export { Sidebar };
