import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import axios from 'axios';

const CreateUser = () => {

    const [defaultId, setDefaultId] = useState(-69);
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [dupePassword, setDupePassword] = useState('');

    useEffect(() => {
        const url = "http://localhost:4000/api/accounts/" + defaultId
        axios.get(url).then((res) => {
            setDefaultId(res.data.userId)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    const createAcc = (e) => {
        e.preventDefault();

        if (newPassword != dupePassword) {
            document.getElementById("confwrong").innerHTML = "Passwords are not the same.";
        } else {
            axios.post('http://localhost:4000/api/accounts/', { "userId": defaultId + 1, "email": newEmail, "password": newPassword }).then((res) => {
                console.log("ACCOUNT SUCCESSFULLY CREATED")
            }).catch((error) => {
                console.log(error)
            })
        }
    }

    return (
        <>
            <body className='bg-gradient-to-tr from-purple-500 to-blue-400 h-screen w-screen'>
                <div className='w-3/6 h-4/6 bg-white m-auto p-5 border-black rounded-md translate-y-1/4 shadow-2xl'>
                    <h2 className="text-4xl font-semibold text-center">Create Account</h2>
                    <form onSubmit={ createAcc }>
                        <p className="text-base m-1">Enter Email</p>
                        <input type="email" placeholder="bob@gmail.com" value={ newEmail } onChange={(e) => setNewEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <p className="text-base m-1">Enter Password</p>
                        <input type="password" placeholder="iliketrains69" value={ newPassword } onChange={(e) => setNewPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <p className="text-base m-1">Confirm Password</p>
                        <input type="password" placeholder="iliketrains69" value={ dupePassword } onChange={(e) => setDupePassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <p  id="confwrong" className='text-xs text-red-500'></p>
                        <button type="submit" className="bg-blue-400 rounded-lg mt-5 mr-6 ml-5 h-9 w-1/2 translate-x-40">Create Account</button>                   
                    </form>
                    
                    <p className='text-black-500 text-center text-xs'><Link to='/' className='text-blue-400'>I have an account.</Link></p>
                </div>
                
            </body>
            
        </>
    )
}

export default CreateUser;