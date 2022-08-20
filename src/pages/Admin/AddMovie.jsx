import React from 'react'

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import {
  addDoc,
  collection,
  serverTimestamp,
  getDoc,
  doc,
  setDoc,
  updateDoc
} from 'firebase/firestore'
import { db, storage } from '../../config/db'
import { useSearchParams } from 'react-router-dom'

import './AddMovie.css'
import { useRef } from 'react'

export default function AddMovie({ bgColor }) {
  document.body.style.background = bgColor
  const [poster, setPoster] = useState('')
  const [cover, setCover] = useState('')
  const [trailer, setTrailer] = useState('')
  const [data, setData] = useState({})
  // const [retrievedData, setRetrievedData] = useState(null)
  // const [updatedData, setUpdatedData] = useState([])
  const [newDirector, setNewDirector] = useState('')
  const [directors, setDirectors] = useState([])
  const [newActor, setNewActor] = useState('')
  const [actors, setActors] = useState([])
  let [searchParams, setSearchParams] = useSearchParams()
  let id = searchParams.get('id')
  console.log(id)

  // useEffect(() => {
  //   const fetchDoc = async () => {
  //     try {
  //       const docRef = doc(db, 'movies', id)
  //       const docSnap = await getDoc(docRef)

  //       if (docSnap.exists()) {
  //         // console.log('Document data:', docSnap.data())
  //         setRetrievedData(docSnap.data())
  //       } else {
  //         console.log('No such document!')
  //       }
  //     } catch (e) {
  //       console.log('Error getting cached document:', e)
  //     }
  //   }

  //   return () => fetchDoc()
  // }, [id])

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
            setData(prev => ({
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
            setData(prev => ({
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
            setData(prev => ({
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

  const navigate = useNavigate()

  const directorsField = useRef()
  const actorsField = useRef()

  useEffect(() => {
    setNewDirector(data.movie_directors)
    setNewActor(data.movie_actors)
  }, [data])

  const addDirector = newDirector =>
    setDirectors(prevDirectors => [...prevDirectors, newDirector])

  const addActor = newActor =>
    setActors(prevActors => [...prevActors, newActor])

  const handleInput = e => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value
    })
  }

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

  const handleAdd = async e => {
    e.preventDefault()
    delete data['movie_actors']
    delete data['movie_directors']
    const date = new Date()
    const movieUploadTime = date.toLocaleString()
    try {
      const res = await addDoc(collection(db, 'movies'), {
        actors,
        directors,
        ...data,
        createdAt: movieUploadTime
      })

      alert('Movie has been added successfully')
      navigate('/admin/movies')
    } catch (e) {
      console.log(e)
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
              <i className="bx bxs-movie icon"></i> ფილმის დამატება
            </a>
          </li>
        </ul>
      </section>
      <section id="content">
        <main id="main--content" style={{ background: bgColor }}>
          <h1 className="title">ფილმის დამატება</h1>
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

          <form onSubmit={handleAdd} action="#" className="admin--form">
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
                    onChange={handleInput}
                    name="movie_directors"
                    ref={directorsField}
                  />
                  <button onClick={handleAddDirector} className="add--person">
                    დამატება
                  </button>
                </div>
                <p className="persons--list">
                  რეჟისორები:{' '}
                  {directors.map(director => (
                    <em key={director}>{director}, </em>
                  ))}
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
                    onChange={handleInput}
                    name="movie_actors"
                    ref={actorsField}
                  />
                  <button onClick={handleAddActor} className="add--person">
                    დამატება
                  </button>
                </div>
                <p className="persons--list">
                  მსახიობები:{' '}
                  {actors.map(actor => (
                    <em key={actor}>{actor}, </em>
                  ))}
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
                  onChange={handleInput}
                  required
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
  )
}
