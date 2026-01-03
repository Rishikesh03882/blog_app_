import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { db } from '../firebase'
import { onSnapshot, collection, doc, deleteDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Blogs = () => {
  const auth = getAuth();

  const collref = collection(db, 'blog');
  const [data, setData] = useState([]);

  useEffect(() => {

    const getData = () => {
      onSnapshot(collref, (snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          ...doc.data(), id: doc.id
        }

        )))
      })
    }

    getData()
    console.log(data);

       toast.success('Your blog is deleted!', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

  }, [])



  const deletedata = async (id) => {
    const data = doc(db, 'blog', id)
    alert("Your document will deleted forever")
    await deleteDoc(data);
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

      {
        data.map((data) => {
          return (
            <>
              <div className='container d-flex justify-content-center align-items-center flex-column my-3'>
                <div className="container">
                  <div className="user-content d-flex justify-content-center align-items-center" style={{ width: "60%" }}>
                    <img src={data.authorImg} alt="" style={{ width: "5%", borderRadius: "50%", margin: '0.5rem' }} />
                    <h4>{data.authorName}</h4>
                  </div>
                </div>
                <div class="card mb-3 bg-secondary" style={{ maxWidth: "750px" }}>
                  <div class="row g-0">
                    <div class="col-md-4 d-flex justify-content-center align-items-center my-3">
                      <img src={data.img} class="img-fluid rounded-start" alt="..."
                        style={{ width: "80%" }}
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body text-center text-white">
                        <h2 class="card-title">{data.title}</h2>
                        <h3 class="card-text">{data.shortDesc}</h3>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>

                        <Link to={`//blogs/${data.id}`} className='btn btn-primary mx-3'>View More</Link>

                        <button
                          onClick={() => deletedata(data.id)}
                          className='btn btn-danger'>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        })
      }

    </>
  )
}

export default Blogs
