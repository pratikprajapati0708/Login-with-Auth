import React from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assests/avatar_2.jpeg'
import styles from '../components/styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { usernameValidate } from '../helper/validate';
const Username = () => {
  // using formik documentation for this
  const formik = useFormik({
    initialValues:{
      username :''
    },
    validate : usernameValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values => {     //On submit displaying values in console
      console.log(values);
    }
  })

  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Hello Again!</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Explore More by connecting with us.
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input className={styles.textbox} type="text" placeholder='Username' name='username' onChange={formik.handleChange} value={formik.values.username} />
              <button className={styles.btn} type='submit'>Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Username