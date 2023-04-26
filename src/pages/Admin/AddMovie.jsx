import "./AddMovie.css";

import { Link } from "react-router-dom";

export default function AddMovie({ bgColor }) {
  document.body.style.background = bgColor;

  return (
    <div>
      <section id="sidebar">
        <Link to={"/admin"}>
          <i className="bx bxs-user icon"></i> ადმინი
        </Link>
        <ul className="side-menu">
          <li>
            <Link to="/admin">
              <i className="bx bxs-home icon"></i> მთავარი
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="bx bxs-message icon"></i> შეტყობინებები
            </Link>
          </li>

          <li className="divider" data-text="ფილმები და მომხმარებლები">
            ფილმები და მომხმარებლები
          </li>
          <li>
            <Link to="/admin/users">
              <i className="bx bxs-user icon"></i> მომხმარებლები
            </Link>
          </li>
          <li>
            <Link to="/admin/movies">
              <i className="bx bxs-movie icon"></i> ფილმები
            </Link>
          </li>
          <li>
            <Link to="/admin/addMovie" className="active">
              <i className="bx bxs-movie icon"></i> ფილმის დამატება
            </Link>
          </li>
        </ul>
      </section>
      <section id="content">
        <main id="main--content" style={{ background: bgColor }}>
          <h1 className="title">ფილმის დამატება</h1>
          <ul className="breadcrumbs">
            <li>
              <Link to="#">Home</Link>
            </li>
            <li className="divider">/</li>
            <li>
              <Link to="#" className="active">
                Dashboard
              </Link>
            </li>
          </ul>

          <form action="#" classNameName="admin--form">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">ფილმის სახელი (ENG)</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  className="admin--text-field"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">ფილმის სახელი (GE)</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  className="admin--text-field"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="year">წელი</label>
              </div>
              <div className="col-75">
                <input type="text" name="year" className="admin--text-field" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">ქვეყანა</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="country"
                  className="admin--text-field"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="imdb">IMDB</label>
              </div>
              <div className="col-75">
                <input type="text" name="imdb" className="admin--text-field" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="votes">IMDB (ხმები)</label>
              </div>
              <div className="col-75">
                <input type="text" name="votes" className="admin--text-field" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="director">რეჟისორი</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  name="director"
                  className="admin--text-field"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="actor">მსახიობები</label>
              </div>
              <div className="col-75">
                <input type="text" name="actor" className="admin--text-field" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="poster">ფილმის პოსტერი</label>
              </div>
              <div className="col-75">
                <input type="file" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="cover">ფილმის ქოვერი</label>
              </div>
              <div className="col-75">
                <input type="file" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="trailer">ფილმის ტრეილერი</label>
              </div>
              <div className="col-75">
                <input type="file" />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="about">ფილმის აღწერა</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="subject"
                  style={{ height: "200px" }}
                ></textarea>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </main>
      </section>
    </div>
  );
}
