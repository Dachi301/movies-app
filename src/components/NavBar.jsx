import { useRef } from "react";
import { Link } from "react-router-dom";

// Styles
import "./NavBar.css";

// Comps
import Search from "./Search";

export default function NavBar() {
  const sidebar = useRef();

  const handleCloseClick = (e) => {
    sidebar.current.style.transform = "translate3d(-100%, 0.5%, 0)";
  };

  const handleOpenSidebar = () => {
    sidebar.current.style.transform = "translate3d(0, 0.5%, 0)"
  } 

  return (
    <nav style={{position: 'relative'}}>
      <ul>
        <div className="links">
        <span id="hamburger-icon" className="material-symbols-outlined" onClick={handleOpenSidebar}>menu</span>
          <Link to="/" className="nav--item">
            მთავარი
          </Link>
          <Link to="/contact" className="nav--item">
            კონტაქტი
          </Link>
          <Link to="/login" className="nav--item">
            შესვლა
          </Link>
        </div>

        <div className="sidebar" ref={sidebar}>
          <span
            className="material-symbols-outlined"
            id="close--sidebar"
            onClick={handleCloseClick}
          >
            close
          </span>

          <div className="wrap--nav-items">
            <Link to="/" className="sidebar--link" style={{color: 'black'}}>
              მთავარი
            </Link>

            <Link to="/contact" className="sidebar--link" style={{color: 'black'}}>
              კონტაქტი
            </Link>
            <Link to="/login" className="sidebar--link" style={{color: 'black'}}>
              შესვლა
            </Link>
          </div>
        </div>

        <Search />
      </ul>
    </nav>
  );
}
