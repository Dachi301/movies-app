import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc
} from 'firebase/firestore'
import { db } from '../../config/db'

import './Movies.css'
import { useNavigate } from 'react-router-dom'

export default function Movies({ bgColor }) {
  document.body.style.background = bgColor

  const [data, setData] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'movies'),
      snapshot => {
        let list = []
        snapshot.docs.forEach(doc => {
          list.push({ id: doc.id, ...doc.data() })
        })
        setData(list)
      },
      error => {
        console.log(error)
      }
    )

    return () => {
      unsub()
    }
  }, [])

  console.log(data)

  const handleEdit = id => {
    console.log(id)

    const specificMovie = data.filter(movie => movie.id === id)
    console.log(specificMovie)

    navigate(`/admin/editMovie?id=${id}`)

    // const moviesRef = doc(db, 'movies', id)

    // // Set the "capital" field of the city 'DC'\

    // await updateDoc(moviesRef, {
    //   movie_title_ge: 'დოქტორი სტრეინჯი'
    // })

    // navigate(`/admin/addMovie?id=${id}`)
  }

  const handleDelete = async id => {
    try {
      await deleteDoc(doc(db, 'movies', id))
      setData(data.filter(item => item.id !== id))
    } catch (err) {
      console.log(err)
    }
  }

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
                <th>პოსტერი</th>
                <th>ქოვერი</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map(movie => {
                  return (
                    <tr key={movie.id}>
                      <td>{movie.id}</td>
                      <td>{movie.movie_title_eng}</td>
                      <td>{movie.movie_title_ge}</td>
                      <td>{movie.movie_year}</td>
                      <td>{movie.movie_imdb}</td>
                      <td>{movie.movie_votes}</td>
                      <td>
                        <img src={movie.poster} alt="poster" className="file" />
                      </td>
                      <td>
                        <img src={movie.cover} alt="cover" className="file" />
                      </td>
                      <td>
                        <button
                          onClick={() => handleEdit(movie.id)}
                          className="table--btn"
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => handleDelete(movie.id)}
                          className="table--btn"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </main>
      </section>
    </div>
  )
}
