import { Link } from 'react-router-dom';
import { useState } from 'react'

const CreateUser = () => {

    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [dupePassword, setDupePassword] = useState('');

    return (
        <>
            <body className='bg-gradient-to-tr from-purple-500 to-blue-400 h-screen w-screen'>
                <div className='w-3/6 h-4/6 bg-white m-auto p-5 border-black rounded-md translate-y-1/4 shadow-2xl'>
                    <h2 className="text-4xl font-semibold text-center">Create Account</h2>
                    <form>
                        <p className="text-base m-1">Enter Email</p>
                        <input type="email" placeholder="bob@gmail.com" value={ newEmail } onChange={(e) => setNewEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <p className="text-base m-1">Enter Password</p>
                        <input type="password" placeholder="iliketrains69" value={ newPassword } onChange={(e) => setNewPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <p className="text-base m-1">Confirm Password</p>
                        <input type="password" placeholder="iliketrains69" value={ dupePassword } onChange={(e) => setDupePassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                        <button type="submit" className="bg-blue-400 rounded-lg mt-5 mr-6 ml-5 h-9 w-1/2 translate-x-40">Create Account</button>                   
                    </form>
                    
                    <p className='text-black-500 text-center text-xs'><Link to='/' className='text-blue-400'>I have an account.</Link></p>
                </div>
                
            </body>
            
        </>
    )
}

export default CreateUser;