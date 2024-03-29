import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assests/avatar_2.jpeg'
import styles from '../components/styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { RegisterValidate } from '../helper/validate';
import {convertToBase64} from '../helper/convert'
const Register = () => {
  // using formik documentation for this
  const formik = useFormik({
    initialValues:{
      email :'',
      username: '',
      password: ''
    },
    validate : RegisterValidate,
    validateOnBlur : false,
    validateOnChange : false,
    onSubmit : async values => {     //On submit displaying values in console
      values = await Object.assign(values,{profile : file || ''})
      console.log(values);
    }
  })

  //Image Uploading
  const onUpload = async e => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  }
  const [file,setFile] = useState();
  return (
    <div className="container mx-auto">
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <div className='flex justify-center items-center h-screen'>
        <div className={styles.glass} style={{width : "45%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Register</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Happy to Join you!
            </span>
          </div>

          <form className='py-1' onSubmit={formik.handleSubmit}>
            <div className='profile flex justify-center py-4'>
              <label htmlFor="profile">
              <img src={file || avatar} className={styles.profile_img} alt="avatar" />
              </label>
              <input type="file" id='profile' name='profile' onChange={onUpload}/>
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input className={styles.textbox} type="email" placeholder='Email' name='email' onChange={formik.handleChange} value={formik.values.email} />
              <input className={styles.textbox} type="text" placeholder='Username' name='username' onChange={formik.handleChange} value={formik.values.username} />
              <input className={styles.textbox} type="password" placeholder='Password' name='password' onChange={formik.handleChange} value={formik.values.password} />
              <button className={styles.btn} type='submit'>Register</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Already Registered?<Link className='text-red-500' to="/"> Login Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Register