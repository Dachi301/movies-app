import { Link } from "react-router-dom";
import "./Users.css";
import React from "react";

export default function Users({ bgColor }) {
  document.body.style.background = bgColor;

  return (
    <div>
      <section id="sidebar">
        <Link to="/admin" className="brand">
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
            <Link to="/admin/users" className="active">
              <i className="bx bxs-user icon"></i> მომხმარებლები
            </Link>
          </li>
          <li>
            <Link to="/admin/movies">
              <i className="bx bxs-movie icon"></i> ფილმები
            </Link>
          </li>
          <li>
            <Link to="/admin/addMovie">
              <i className="bx bxs-movie icon"></i> ფილმის დამატება
            </Link>
          </li>
        </ul>
      </section>
      <section id="content">
        <main id="main--content">
          <h1 className="title">მომხმარებლები</h1>
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

          <table border="2" className="movies--table">
            <thead>
              <tr>
                <th>ID</th>
                <th>სახელი</th>
                <th>გვარი</th>
                <th>ელ-ფოსტა</th>
                <th>პაროლი</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>johndoes@yahoo.com</td>
                <td>johndoe12345</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jordan</td>
                <td>Belfort</td>
                <td>jordanbelfort@gmail.com</td>
                <td>jordan999</td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </div>
  );
}
