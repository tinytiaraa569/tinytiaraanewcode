import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineCloseCircle, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import LoginPage from '../Component/LoginPage'
import styles from '../Styles/styles'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { server } from '../server'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'

function ShopLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(
                `${server}/shop/login-shop`,
                { email, password },
                { withCredentials: true }
            );
            toast.success("Login successful!");
            window.location.reload()
            navigate("/dashboard");
            window.location.reload()

            // dispatch({ type: "LoadSellerSuccess", payload: data.seller });

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || error.message);
            dispatch({ type: "LoadSellerFail", payload: error.response?.data?.message || error.message });
        }
    };
    const handleRedirect = () => {
        window.location.reload();
        navigate("/");
        window.location.reload();
    };
    return (
        <div className='min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-200 flex-col justify-center py-12 sm:px-6 lg:px-8'>
              <div className="relative group">
            {/* Tooltip */}
            <div className="absolute top-10 right-0 mb-2 w-max p-2 bg-gray-700 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform scale-95 group-hover:scale-100">
            <span className="font-semibold">Go to Website</span>
        </div>

            {/* Close Icon */}
            <AiOutlineCloseCircle
                size={30}
                className="absolute top-0 right-0 cursor-pointer text-gray-600 hover:text-red-500 hover:scale-110 transition-all duration-200" 
                onClick={handleRedirect}
            />
        </div>
          
            
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="text-center text-4xl font-extrabold text-gray-900 leading-tight tracking-tight">
                    Admin Portal Access
                </h2>
                <p className="text-center text-sm text-gray-600 mt-1">
                    Sign in to manage your store and products.
                </p>
            </div>
            <div className='mt-8  sm:mx-auto sm:w-full sm:max-w-lg'>
                <div className="bg-white rounded-[12px] px-8 py-6 pb-8 shadowoglogin sm:px-12">

                    <div className='flex justify-center mb-4'>
                        <img className='w-[150px] h-[100px] object-cover filtershadowoflogin' src="https://backend.tinytiaraa.com:8000/uploads/images/logowebsite/pgqpod1dbwdxo4kudbjl.webp" alt="" />
                    </div>
                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-700'>
                                Email Address
                            </label>
                            <div className="mt-1">
                                <input className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm' type="email" name='email' autoComplete='email' required value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            </div>
                        </div>
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

                        <div className={`${styles.noramlFlex} justify-between`}>
                            <div className={`${styles.noramlFlex}`}>
                                <input type="checkbox" name='remember-me' id='remember-me' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
                                <label htmlFor="remember-me" className='ml-2 block text-sm text-gray-900'>Remember me</label>
                            </div>
                            <div className="text-sm">
                                <a
                                    href=".forgot-password"
                                    className="font-medium text-blue-600 hover:text-blue-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button type='submit' className='group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'>
                                Submit
                            </button>
                        </div>
                        <div className={`${styles.noramlFlex} w-full`}>
                            <h4>Not have any account?</h4>
                            <Link to="/shop-create" className="text-blue-600 pl-2">
                                Sign Up
                            </Link>
                        </div>
                    </form>

                </div>

            </div>


        </div>
    )
}

export default ShopLogin
