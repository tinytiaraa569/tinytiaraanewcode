import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import LoginPage from '../Component/LoginPage'
import styles from '../Styles/styles'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { server } from '../server'
import { toast } from 'react-toastify'
import { RxAvatar } from 'react-icons/rx'

function Shopcreate() {


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState()
    // const [zipCode, setZipCode] = useState()
    // const [avatar, setAvatar] = useState()
    const [address, setAddress] = useState("")
    const [password, setPassword] = useState("")

    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const handleFileInputChange = (e) => {
        const file = e.target.files[0]
        setAvatar(file)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        const newForm = new FormData();
        newForm.append("name", name);
        newForm.append("email", email);
        newForm.append("phoneNumber", phoneNumber);
        newForm.append("password", password);
        newForm.append("address", address);
        // newForm.append("file", avatar);
        // newForm.append("zipCode", zipCode);



        
        axios.post(`${server}/shop/create-shop`, newForm, config)
        .then((res) => {
            toast.success(res.data.message)
            setName("")
            setEmail("")
            setPassword("")
            setPhoneNumber("")
            setAddress("")
            // setZipCode()
            // setAvatar()
            


        }).catch((error) => {
            console.log(error)
            toast.error(error.response.data.message)
        })

      

    }

    return (
        <div className='min-h-screen bg-gray-50 flex-col justify-center py-12 sm:px-6 lg:px-8'>
            <div className='sm:mx-auto sm:w-full sm:max-w-md'>
                <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
                    Login to Shop Page
                </h2>
            </div>
            <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-[40rem]'>
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-700'>
                                Name
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="text"  required value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                Email
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="email"  required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="phonenumber" className='block text-sm font-medium text-gray-700'>
                                phonenumber
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="tel"  required value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }} />
                            </div>
                        </div>
                        {/* <div>
                            <label htmlFor="zipcode" className='block text-sm font-medium text-gray-700'>
                            zipcode
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="number"  required value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} />
                            </div>
                        </div> */}
                        <div>
                            <label htmlFor="password" className='block text-sm font-medium text-gray-700'>
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type={visible ? "text" : "password"} name='password' autoComplete='current-password' required value={password} onChange={(e) => { setPassword(e.target.value) }} />

                                {
                                    visible ?
                                        <AiOutlineEye
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(false)}
                                        />
                                        : <AiOutlineEyeInvisible
                                            className="absolute right-2 top-2 cursor-pointer"
                                            size={25}
                                            onClick={() => setVisible(true)}
                                        />
                                }
                            </div>
                        </div>

                        <div>
                            <label htmlFor="Address" className='block text-sm font-medium text-gray-700'>
                            Address
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="text" name='email' autoComplete='email' required value={address} onChange={(e) => { setAddress(e.target.value) }} />
                            </div>
                        </div>

                        {/* <div>
                            <label htmlFor="avatar" className='block text-sm font-medium text-gray-700'></label>
                            <div className="mt-2 flex items-center">
                                <span className='inline-block h-8 w-8 rounded-full overflow-hidden'>
                                    {
                                        avatar ?
                                            <img src={URL.createObjectURL(avatar)} alt="avatar img" className='h-full w-full object-cover rounded-full' />
                                            :
                                            <RxAvatar className="h-8 w-8" />
                                    }

                                </span>
                                <label htmlFor="file-input" className='ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
                                    <span>Uplaod a file</span>
                                    <input type="file" name='avatar' id='file-input' accept='.jpg,.jpeg,.png' onChange={handleFileInputChange} className='sr-only' />
                                </label>

                            </div>
                        </div> */}

                   

                        <div>
                            <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                                Submit
                            </button>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Already have an account?</h4>
                            <Link to="/shop-login" className="text-blue-600 pl-2">
                                Sign In
                            </Link>
                        </div>
                    </form>

                </div>

            </div>


        </div>
    )
}

export default Shopcreate
