import './Users.css'
import React from 'react'

export default function Users({ bgColor }) {
  document.body.style.background = bgColor

  return (
    <div>
      <section id="sidebar">
        <a href="/admin" className="brand">
          <i className="bx bxs-user icon"></i> ადმინი
        </a>
        <ul className="side-menu">
          <li>
            <a href="/admin">
              <i className="bx bxs-home icon"></i> მთავარი
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message icon"></i> შეტყობინებები
            </a>
          </li>

          <li className="divider" data-text="ფილმები და მომხმარებლები">
            ფილმები და მომხმარებლები
          </li>
          <li>
            <a href="/admin/users" className="active">
              <i className="bx bxs-user icon"></i> მომხმარებლები
            </a>
          </li>
          <li>
            <a href="/admin/movies">
              <i className="bx bxs-movie icon"></i> ფილმები
            </a>
          </li>
          <li>
            <a href="/admin/addMovie">
              <i className="bx bxs-movie icon"></i> ფილმის დამატება
            </a>
          </li>
        </ul>
      </section>
      <section id="content">
        <main id="main--content">
          <h1 className="title">მომხმარებლები</h1>
          <ul className="breadcrumbs">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="divider">/</li>
            <li>
              <a href="#" className="active">
                Dashboard
              </a>
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
  )
}
