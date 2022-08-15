import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { db, storage } from '../../config/db'

import './EditMovie.css'

export default function EditMovie({ bgColor }) {
  document.body.style.background = bgColor

  const [retrievedData, setRetrievedData] = useState([])
  const [updatedData, setUpdatedData] = useState([])
  const [newDirector, setNewDirector] = useState('')
  const [newActor, setNewActor] = useState('')
  const [actors, setActors] = useState([])
  const [poster, setPoster] = useState('')
  const [cover, setCover] = useState('')
  const [trailer, setTrailer] = useState('')

  const [directors, setDirectors] = useState([])
  const directorsField = useRef()
  const actorsField = useRef()

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  let id = searchParams.get('id')
  // console.log(id)

  useEffect(() => {
    const uploadPoster = () => {
      const metadata = {
        contentType: 'image/jpg'
      }
      const randomStr = new Date().getTime() + poster.name
      const storageRef = ref(storage, randomStr)

      const uploadTask = uploadBytesResumable(storageRef, poster, metadata)
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        error => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setRetrievedData(prev => ({
              ...prev,
              poster: downloadURL
            }))
          })
        }
      )
    }

    const uploadCover = () => {
      const metadata = {
        contentType: 'image/jpg'
      }
      const randomStr = new Date().getTime() + cover.name
      const storageRef = ref(storage, randomStr)

      const uploadTask = uploadBytesResumable(storageRef, cover, metadata)

      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        error => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setRetrievedData(prev => ({
              ...prev,
              cover: downloadURL
            }))
          })
        }
      )
    }

    const uploadTrailer = () => {
      const metadata = {
        contentType: 'video/mp4'
      }
      const randomStr = new Date().getTime() + trailer.name
      const storageRef = ref(storage, randomStr)

      const uploadTask = uploadBytesResumable(storageRef, trailer, metadata)
      uploadTask.on(
        'state_changed',
        snapshot => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
            default:
              break
          }
        },
        error => {
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
            setRetrievedData(prev => ({
              ...prev,
              trailer: downloadURL
            }))
          })
        }
      )
    }

    poster && uploadPoster()
    cover && uploadCover()
    trailer && uploadTrailer()
  }, [poster, cover, trailer])

  const handleDirectorChange = e => {
    setNewDirector(e.target.value)
  }

  const handleActorChange = e => {
    setNewActor(e.target.value)
  }

  const handleInput = e => {
    const { name, value } = e.target

    setRetrievedData({ ...retrievedData, directors, actors, [name]: value })
  }

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, 'movies', id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        setRetrievedData(docSnap.data())
      } else {
        console.log('No such document!')
      }
    }

    return () => fetchData()
  }, [id])

  useEffect(() => {
    setActors(retrievedData.actors)
    setDirectors(retrievedData.directors)
  }, [retrievedData])

  const addDirector = newDirector =>
    setDirectors(prevDirectors => [...prevDirectors, newDirector])

  const addActor = newActor =>
    setActors(prevActors => [...prevActors, newActor])

  const handleAddDirector = e => {
    e.preventDefault()
    addDirector(newDirector)
    directorsField.current.value = ''
  }

  const handleAddActor = e => {
    e.preventDefault()
    addActor(newActor)
    actorsField.current.value = ''
  }

  const handleSubmit = async e => {
    e.preventDefault()

    delete retrievedData['actors']
    delete retrievedData['directors']

    try {
      const moviesRef = doc(db, 'movies', id)

      // Set the "capital" field of the city 'DC'
      await updateDoc(moviesRef, {
        actors,
        directors,
        ...retrievedData
      })
      alert('Movie has been edited successfully')
      navigate('/admin/movies')
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
            <a href="/admin/movies">
              <i className="bx bxs-movie icon"></i> ფილმები
            </a>
          </li>
          <li>
            <a href="/admin/addMovie" className="active">
              <i className="bx bxs-movie icon"></i> რედაქტირება
            </a>
          </li>
        </ul>
      </section>
      <section id="content">
        <main id="main--content" style={{ background: bgColor }}>
          <h1 className="title">რედაქტირება</h1>
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

          <form onSubmit={handleSubmit} action="#" className="admin--form">
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">ფილმის სახელი (ENG)</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="fname"
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_title_eng"
                  defaultValue={retrievedData.movie_title_eng}
                  required
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
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_title_ge"
                  defaultValue={retrievedData.movie_title_ge}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="year">წელი</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_year"
                  defaultValue={retrievedData.movie_year}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">ქვეყანა</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_country"
                  defaultValue={retrievedData.movie_country}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="imdb">IMDB</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_imdb"
                  defaultValue={retrievedData.movie_imdb}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="votes">IMDB (ხმები)</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  className="admin--text-field"
                  onChange={handleInput}
                  name="movie_votes"
                  defaultValue={retrievedData.movie_votes}
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="director">რეჟისორი</label>
              </div>
              <div className="col-75">
                <div className="multiple--persons">
                  <input
                    type="text"
                    className="admin--text-field"
                    name="movie_directors"
                    onChange={handleDirectorChange}
                    ref={directorsField}
                  />
                  <button onClick={handleAddDirector} className="add--person">
                    დამატება
                  </button>
                </div>
                <p className="persons--list">
                  რეჟისორები:{' '}
                  {/* {directors.map(director => (
                    <em key={director}>{director}, </em>
                  ))} */}
                  {directors
                    ? directors.map(director => (
                        <em key={director}>{director}, </em>
                      ))
                    : null}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="actor">მსახიობები</label>
              </div>
              <div className="col-75">
                <div className="multiple--persons">
                  <input
                    type="text"
                    className="admin--text-field"
                    name="movie_actors"
                    ref={actorsField}
                    onChange={handleActorChange}
                  />
                  <button onClick={handleAddActor} className="add--person">
                    დამატება
                  </button>
                </div>
                <p className="persons--list">
                  მსახიობები:{' '}
                  {actors
                    ? actors.map(actor => <em key={actor}>{actor}, </em>)
                    : null}
                  {/* {retrievedData.actors
                    ? retrievedData.actors.map(actor => (
                        <em key={actor}>{actor}, </em>
                      ))
                    : null} */}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="poster">ფილმის პოსტერი</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  onChange={e => setPoster(e.target.files[0])}
                  name="poster"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="cover">ფილმის ქოვერი</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  onChange={e => setCover(e.target.files[0])}
                  name="cover"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="trailer">ფილმის ტრეილერი</label>
              </div>
              <div className="col-75">
                <input
                  type="file"
                  onChange={e => setTrailer(e.target.files[0])}
                  name="trailer"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="about">ფილმის აღწერა</label>
              </div>
              <div className="col-75">
                <textarea
                  id="subject"
                  name="movie_subject"
                  style={{ height: '200px' }}
                  defaultValue={retrievedData.movie_subject}
                  onChange={handleInput}
                  required
                ></textarea>
              </div>
            </div>
            <div className="row">
              <input type="submit" value="Update" />
            </div>
          </form>
        </main>
      </section>
    </div>
  )
}
