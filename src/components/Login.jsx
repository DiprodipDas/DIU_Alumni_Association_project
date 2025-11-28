import React, { useState } from 'react'
import { FaGoogle, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const[error,setError]=useState("")

    const { loginWithEmail, googleLogin } = useAuth()
    const navigate = useNavigate()

    const onSubmit = async data => {
        try {
            await loginWithEmail(data.email, data.password);
            console.log("Login Sucessfull")

            Swal.fire({
                title: "Login Successfull",
                icon: "success",
                draggable: true,

            });
            setError("")
            navigate("/")
        } catch (error) {
            console.error("Login Failed", error.message)
            setError("Failed to login.Please provide currect email & password.")
        }
    }

    //google login 

    const handleGoogleLogin=async()=>{
     try {
        await googleLogin();
        navigate('/');
     } catch (error) {
        console.error("Failed to login" , error)
     }
    }
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-100 p-5'>
            <div className='w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg'>
                <h2 className='text-2xl font-bold text-center text-gray-800'>Please Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Email: </label>
                        <input
                            {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`}
                            type="email" />
                        {errors.email && <p className='text-sm italic text-red-500 mt-2'>{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className='block mb-2 text-sm font-medium text-gray-700'>Password: </label>
                        <input
                            {...register("password", { required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters long." } })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2`}
                            type="password" />
                        {errors.password && <p className='text-sm italic text-red-500 mt-2'>{errors.password.message}</p>}
                    </div>
                     
                     {error && <p className='text-sm italic text-red-500 mt-2'>{error}</p>}
                    <button className='w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 cursor-pointer' type='submit'>Log in</button>
                </form>


                <div className='text-center space-y-4'>
                    <p className='text-gray-600'>Or login with</p>
                    <div className='flex flex-col sm:flex-row justify-center gap-4 '>
                        <button onClick={handleGoogleLogin} className=' flex cursor-pointer w-full items-center px-4 py-2 space-x-2 text-white bg-red-500 rounded-md hover:bg-red-600'>
                            <FaGoogle />
                            <span>Google</span>
                        </button>
                        <button className=' flex cursor-pointer w-full items-center px-4 py-2 space-x-2 text-white bg-gray-900 rounded-md hover:bg-gray-950'>
                            <FaGithub />
                            <span>Github</span>
                        </button>
                        <button className=' flex cursor-pointer w-full items-center px-4 py-2 space-x-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
                            <FaFacebook />
                            <span>Facebook</span>
                        </button>
                    </div>
                </div>
                <p className='text-sm text-center text-gray-600 '> Don't have an account? Please

                    <Link className='text-blue-600 hover:underline mx-1' to='/register'>Sign up</Link>
                </p>
            </div>
        </div>
    )
}

export default Login