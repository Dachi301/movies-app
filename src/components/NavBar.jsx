import { useRef } from "react";
import { Link } from "react-router-dom";

// Styles
import "./NavBar.css";

// Comps
import Search from "./Search";

export default function NavBar() {
  const sidebar = useRef();

  const handleCloseClick = (e) => {
    sidebar.current.style.transform = "translate3d(-100%, 0, 0)";
    console.log(e.target);
  };

  return (
    <nav>
      <ul>
        <div className="links">
        <span id="hamburger-icon" class="material-symbols-outlined">menu</span>
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
            <Link to="/" className="sidebar--link">
              მთავარი
            </Link>

            <Link to="/contact" className="sidebar--link">
              კონტაქტი
            </Link>
            <Link to="/login" className="sidebar--link">
              შესვლა
            </Link>
          </div>
        </div>

        <Search />
      </ul>
    </nav>
  );
}
