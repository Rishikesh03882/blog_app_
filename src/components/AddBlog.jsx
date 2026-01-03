import React, { use, useState } from 'react'
import Navbar from './Navbar'
import { db } from '../firebase'
import { addDoc, collection } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddBlog = () => {

  const auth = getAuth()
  const navigate = useNavigate()

  const [formData, setformData] = useState(
    {
      title: '',
      shortDesc: '',
      fullDesc: '',
      img: '',
      authorName: auth.currentUser.displayName,
      authorImg: auth.currentUser.photoURL

    }
  )
  const handleChange = (e) => {

    setformData({ ...formData, [e.target.name]: e.target.value })
    // console.log(formData.title)

  }
  const formRef = collection(db, 'blog');
  const submithandler = async (e) => {
    e.preventDefault();
    await addDoc(formRef, formData)

    console.log("data submitted")

    setformData(
      {
        title: '',
        shortDesc: '',
        fullDesc: '',
        img: '',

      }
    )
    toast.success('Your blog submitted!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    setTimeout(() => {

      navigate('/blogs')
    }, 25000);
  }

  return (

    <>
      <ToastContainer
        position="top-right"
        autoClose={4998}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Navbar />
      <div className="container my-3" style={{ width: "60%", lineHeight: '1rem' }}>
        <form onSubmit={submithandler}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Title</label>
            <input
              value={formData.title}
              name='title'
              onChange={handleChange}
              type="text" class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Sort Description</label>
            <input
              value={formData.shortDesc}
              name='shortDesc'
              onChange={handleChange}
              type="text" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Full Description</label>
            <textarea
              value={formData.fullDesc}
              name='fullDesc'
              onChange={handleChange}
              class="form-control" id="exampleFormControlTextarea1"
              rows="3"></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Img Url</label>
            <input
              value={formData.img}
              name='img'
              onChange={handleChange}
              type="text" class="form-control" id="exampleInputEmail1"
              aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>

          <button type="submit" class="btn btn-primary">Add blog</button>
        </form>
      </div>
    </>
  )
}

export default AddBlog
