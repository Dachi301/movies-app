import './Movies.css'

import React from 'react'

export default function Movies({ bgColor }) {
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
            <a href="/admin/users">
              <i className="bx bxs-user icon"></i> მომხმარებლები
            </a>
          </li>
          <li>
            <a href="/admin/movies" className="active">
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
          <h1 className="title">ფილმები</h1>
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
                <th>ფილმის სახელი (ENG)</th>
                <th>ფილმის სახელი (GE)</th>
                <th>წელი</th>
                <th>IMDB</th>
                <th>IMDB Votes</th>
                <th>ნახვები</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>The Batman</td>
                <td>ბეტმენი</td>
                <td>2022</td>
                <td>7.9</td>
                <td>192223</td>
                <td>180</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Fast and furious</td>
                <td>ფორსაჟი</td>
                <td>2021</td>
                <td>5.9</td>
                <td>112223</td>
                <td>90</td>
              </tr>
            </tbody>
          </table>
        </main>
      </section>
    </div>
  )
}
