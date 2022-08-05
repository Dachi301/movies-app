// Styles
import './Admin.css'

import { Link } from 'react-router-dom'

export default function Admin({ bgColor }) {
  document.body.style.background = bgColor

  return (
    <div>
      <section id="sidebar">
        <a href="/admin" className="brand">
          <i className="bx bxs-user icon"></i> ადმინი
        </a>
        <ul className="side-menu">
          <li>
            <a href="/admin" className="active">
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
          <h1 className="title">მთავარი</h1>
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
          <div className="info-data">
            <div className="card">
              <div className="head">
                <div>
                  <h2>1500</h2>
                  <p>Traffic</p>
                </div>
                <i className="bx bx-trending-up icon"></i>
              </div>
              <span className="progress" data-value="40%"></span>
              <span className="label">40%</span>
            </div>
            <div className="card">
              <div className="head">
                <div>
                  <h2>234</h2>
                  <p>Newly added users</p>
                </div>
                <i className="bx bx-trending-up icon up"></i>
              </div>
              <span className="progress" data-value="60%"></span>
              <span className="label">60%</span>
            </div>
            <div className="card">
              <div className="head">
                <div>
                  <h2>465</h2>
                  <p>Pageviews</p>
                </div>
                <i className="bx bx-trending-up icon"></i>
              </div>
              <span className="progress" data-value="30%"></span>
              <span className="label">30%</span>
            </div>
            <div className="card">
              <div className="head">
                <div>
                  <h2>235</h2>
                  <p>Visitors</p>
                </div>
                <i class="bx bx-trending-down red"></i>
              </div>
              <span className="progress" data-value="80%"></span>
              <span className="label">80%</span>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}
