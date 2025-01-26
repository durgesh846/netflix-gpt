import React, { useState } from 'react'
import Header from './Header'
import '../css/login.css'

const Login = () => {
    let [isSigninForm,setSigninForm] = useState(true);
    const handleClick = () => {
        setSigninForm(!isSigninForm);
    }
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/7a8c0067-a424-4e04-85f8-9e25a49a86ed/web/IN-en-20250120-TRIFECTA-perspective_860a95da-c386-446e-af83-fef8ddd80803_large.jpg"
                    alt="background"
                    className="w-full h-full object-cover"
                />
            </div>
            <Header />
            <div className="relative flex items-center justify-center min-h-screen">
                <form className=" bg-opacity-90 shadow-lg rounded-2xl p-8 w-96 text-white" id='login-form'>
                    <h2 className="text-2xl font-bold mb-4 text-white">{isSigninForm ? "Sign In" : "Sign Up"}</h2>
                    {!isSigninForm &&
                        <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter your Full Name"
                            className="w-full p-2 border bg-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:white"
                        />
                        </div> 
                    }
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Enter your Email"
                            className="w-full p-2 border bg-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:white"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Enter your Password"
                            className="w-full p-2 border bg-gray-700 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:white"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                        {isSigninForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className='py-4 cursor-pointer' onClick={handleClick}>{isSigninForm ? "New to Netflix? Sign Up Now" : "Already Registerd ? Sign in Now"}</p>
                </form>
            </div>
        </div>

    )
}

export default Login