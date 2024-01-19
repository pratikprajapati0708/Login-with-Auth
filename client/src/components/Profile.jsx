import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import avatar from '../assests/avatar_2.jpeg'
import styles from '../components/styles/Username.module.css'
import extend from '../components/styles/Profile.module.css'
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { convertToBase64 } from '../helper/convert'
import { ProfileValidation } from '../helper/validate'
const Profile = () => {
    // using formik documentation for this
    const formik = useFormik({
        initialValues: {
            fname: '',
            lname:'',
            mobile: '',
            email: '',
            address:''
        },
        validate: ProfileValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {     //On submit displaying values in console
            values = await Object.assign(values, { profile: file || '' })
            console.log(values);
        }
    })

    //Image Uploading
    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
    const [file, setFile] = useState();
    return (
        <div className="container mx-auto">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={`${styles.glass} ${extend.glass}`} style={{ width: "45%" }}>

                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold'>Profile</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                            You can update the details.
                        </span>
                    </div>

                    <form className='py-1' onSubmit={formik.handleSubmit}>
                        <div className='profile flex justify-center py-4'>
                            <label htmlFor="profile">
                            <img src={ file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" />
                            </label>
                            <input type="file" id='profile' name='profile' onChange={onUpload} />
                        </div>
                        <div className="textbox flex flex-col items-center gap-6">
                            <div className="name flex w-3/4 gap-10">
                                <input className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='First Name' name='fname' onChange={formik.handleChange} value={formik.values.fname} />
                                <input className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Last Name' name='lname' onChange={formik.handleChange} value={formik.values.lname} />
                            </div>
                            <div className="name flex w-3/4 gap-10">
                                <input className={`${styles.textbox} ${extend.textbox}`} type="mobile" placeholder='Mobile' name='mobile' onChange={formik.handleChange} value={formik.values.mobile} />
                                <input className={`${styles.textbox} ${extend.textbox}`} type="email" placeholder='Email' name='email' onChange={formik.handleChange} value={formik.values.email} />
                            </div>
                            <input className={`${styles.textbox} ${extend.textbox}`} type="text" placeholder='Address' name='address' onChange={formik.handleChange} value={formik.values.address} />
                            <button className={styles.btn} type='submit'>Update</button>
                        </div>
                        <div className="text-center py-4">
                            <span className='text-gray-500'>come back later?<Link className='text-red-500' to="/Logout">Logout</Link></span>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default Profile