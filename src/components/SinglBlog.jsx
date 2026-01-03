import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { getDoc, doc, collection } from 'firebase/firestore'
import Navbar from './Navbar'

const SinglBlog = () => {
  const { id } = useParams()
  const [data, setData] = useState([])

  const colRef = collection(db, 'blog');
  const singledata = doc(db, 'blog', id);
  useEffect(() => {

    const singlefetch = () => {
      getDoc(singledata).then((doc) => setData(doc.data()));
    }
    singlefetch()
  }, [id])


  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center align-items-center align-item-center my-3">
        <div className="left-img">
          <img src={data.img} alt='firebase' className='img-fluid' style={{ width: '70%' }} />
        </div>
        <div className="right-data d-flex justify-content-center align-items-center flex-column">
          <div className="user-content d-flex justify-content-center align-items-center">
            <img src={data.authorImg} alt="" style={{ width: "10%", borderRadius: "50%", margin: '0.5rem' }} />
            <h4>{data.authorName}</h4>
          </div>
          <div className='text-center '>
            <h1>{data.title}</h1>
            <h2>{data.shortDesc}</h2>
            <h4>{data.fullDesc}</h4>
          </div>
        </div>

      </div>
    </>
  )
}

export default SinglBlog
