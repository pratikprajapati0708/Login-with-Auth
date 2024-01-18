import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../components/styles/Username.module.css'
import {Toaster} from 'react-hot-toast';
import {useFormik} from 'formik';
import { passwordResetValidate } from '../helper/validate';
const Reset = () => {
  // using formik documentation for this
  const formik = useFormik({
    initialValues:{
      password :'',
      confirmpwd :'',
    },
    validate : passwordResetValidate,
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
        <div className={styles.glass} style={{width:"50%"}}>

          <div className="title flex flex-col items-center">
            <h4 className='text-5xl font-bold'>Reset</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
              Enter New Password.
            </span>
          </div>

          <form className='pt-20' onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input className={styles.textbox} type="password" placeholder='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
              <input className={styles.textbox} type="password" placeholder='confirm password' name='confirmpwd' onChange={formik.handleChange} value={formik.values.confirmpwd} />
              <button className={styles.btn} type='submit'>Reset</button>
            </div>
            <div className="text-center py-4">
              <span className='text-gray-500'>Forgot Passsword?<Link className='text-red-500' to="/recovery"> Recover Now</Link></span>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Reset