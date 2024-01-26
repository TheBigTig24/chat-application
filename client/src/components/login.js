import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logIn = (e) => {
        e.preventDefault();
        console.log(email + " " + password)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("your mom")
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <>
        <body className="bg-gradient-to-tr from-purple-500 to-blue-400 h-screen w-screen">
            <div className="w-72 h-96 bg-white m-auto p-5 border-black rounded-md translate-y-1/4 shadow-2xl">
                <h2 className="text-4xl font-semibold text-center">Login</h2>
                <form onSubmit={ logIn } >
                    <p className="text-base m-1">Email</p>
                    <input type="email" placeholder="bob@gmail.com" value={ email } onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    
                    <p className="text-base m-1">Password</p>
                    <input type="password" placeholder="iliketrains69" value={ password } onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                    <button type="submit" className="bg-blue-400 rounded-lg mt-5 mr-6 ml-5 h-9 w-1/2 translate-x-10">Log In</button>
                </form>
                <p className="text-xs text-gray-600 my-2 text-center">Or Sign In Using</p>
                <button class="translate-x-6 px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                    <img class="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/>
                    <span>Login with Google</span>
                </button>
                <p className="text-xs text-gray-500 text-center m-2">Don't have an account? <Link to="/createUser" className="underline text-blue-500">Create one here.</Link></p>
            </div>
        </body>
        </>
    )
}

export default Login;