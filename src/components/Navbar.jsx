import React, {useState} from "react";
import { BsList } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () =>{
    const [nav, setNav] = useState(false)

    /**whenever menu is click function below will run */
    const handleNav = () =>{
        setNav(!nav);
    }

    return (
       <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
        <h1 className="w-full text-3xl font-bold text-[#00d9a]">React</h1>
        <ul className="hidden md:flex">
            <li className="p-4">Home</li>
            <li className="p-4">Projects</li>
            <li className="p-4">About</li>
            <li className="p-4">Contacts</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
            {nav ? <BsList size={20}/> : <AiOutlineClose size={20}/>}
        </div>
        
        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#DFDFDF] ease-in-out duration-500" : "fixed left-[-100%]"}>
            <h1 className="w-full text-3xl font-bold text-[#00d9a] m-4">React</h1>
            <ul className="uppercase p-4">
                <li className="p-4 border-b border-b-gray-900">Home</li>
                <li className="p-4 border-b border-b-gray-900">Projects</li>
                <li className="p-4 border-b border-b-gray-900">About</li>
                <li className="p-4 border-b border-b-gray-900">Contacts</li>
            </ul>
        </div>
       </div>
    )
}

export default Navbar