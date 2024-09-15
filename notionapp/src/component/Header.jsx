import React ,{useState} from 'react'
import { FaBell } from "react-icons/fa"
import image from '../assets/download.jpeg'

function Header() {
    const [language, setLanguage] = useState('Eng (US)');
    const user = {
        name: 'Himanshu',
        role: 'Admin',
        imageUrl: image
    };
    return (<>
        <header className="flex justify-center items-center p-4 bg-white ">
            <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <div className="relative">
                    <input
                        type="text"
                        placeholder='Search here...'
                        className="pl-3 mx-5 w-96 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-indigo-500"
                    />
                </div>
            </div>
            <div className="flex items-center space-x-6">
                <div className="relative">
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:border-indigo-500"
                    >
                        <option>Eng (US)</option>
                        <option>Eng (UK)</option>
                        {/* Add more languages as needed */}
                    </select>
                </div>
                <div className="relative">
                    <FaBell/>
                </div>
                <div className="flex items-end space-x-2">
                    <img
                        src={user.imageUrl}
                        alt="User Image"
                        className="w-10 h-10 rounded-full"
                        width={40}
                        height={40}
                    />
                    <div className="flex flex-col">
                        <span className="text-gray-800 font-medium">{user.name}</span>
                        <span className="text-gray-500 text-sm">{user.role}</span>
                    </div>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header