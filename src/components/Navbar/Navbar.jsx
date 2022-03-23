import "./Navbar.css";
import "./Navbar-Media.css";
import { AiFillCloseCircle, BiSearch } from "../../icons/icons";
import { logoImg } from "../../assets/images.js";
import { useState } from "react";
const Navbar = () => {
  const [showSearchModal, setShowSearchModal] = useState(false);
  return (
    <>
      <section className="flex nav-section">
        <div className="flex h-100 logo-container">
          <span className="logo">SHED</span>
        </div>
        <div className="flex search-container ">
          <input className="search-input" type="text" placeholder="Search..." />
          <div className="search-icon-container">
            <BiSearch className="search-btn" />
          </div>
        </div>
        {showSearchModal && (
          <div className="search-bar-modal">
            <div className="search-bar">
              <div className="search-bar-heading flex ">
                <span>What are you looking for?</span>
                <AiFillCloseCircle
                  onClick={() => setShowSearchModal(false)}
                  className="icon size-xs"
                />
              </div>
              <form className="search-bar-center flex">
                <input placeholder="Search Here" />
                <BiSearch className="mobile-search-btn icon size-xs" />
              </form>
            </div>
          </div>
        )}

        <div className="flex search-wrapper">
          <BiSearch
            onClick={() => setShowSearchModal(true)}
            className="mobile-search-btn icon size-xs"
          />
          <div className="avatar-container size-sm txt-avatar flex">
            <span>SD</span>
          </div>
        </div>
      </section>
    </>
  );
};
export { Navbar };
