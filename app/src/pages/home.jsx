import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logolu.png'
import Intereses from '../components/intereses'
import { LogoutButton } from '../auth0/logout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/home.css'


function Home() {

    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);
    const [button, setButton] = useState(false);
    const showButton = () => setButton(!button);
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="w-screen h-screen bg-gray-200 overflow-y-scroll">
                <header className="h-20 flex ">
                    <div className="2xl:w-1/2 lg:w-1/4 usm:w-1/2 flex">
                        <FontAwesomeIcon icon={faBars} onClick={showMenu} size="1x" className="color 2xl:m-4 md:m-4 usm:mt-6 usm:ml-4" />
                        <h1 className="color font md:text-xl sm:text-l mt-5 ml-3 ">{user.name}</h1>
                    </div>

                    <div className="2xl:w-1/2 lg:w-3/4 usm:w-1/2 flex justify-end">
                        <h1 className="color font-bold md:text-xl sm:text-l mt-5 ">INFLUENCER RESEARCH</h1>
                        <img src={Logo} alt="logo of influencer research" className="md:w-12 md:h-16 md:m-1 md:mr-6 usm:w-6 usm:h-8 usm:mt-4 usm:ml-4 usm:mr-4"></img>
                    </div>
                </header>

                <div className={menu ? 'menu active' : 'menu'} >
                    <p className="ml-4 mt-8 hover:text-gray-900">Edit profile</p>
                    <p className="ml-4 mt-4 hover:text-gray-900">Intereses</p>
                    <p className="ml-4 mt-4 hover:text-gray-900">Help</p>
                    <div className="ml-4 mt-4 hover:text-gray-900"> <LogoutButton /></div>
                </div>

                <Intereses />

                <div className="boxNextButton">
                    <Link to='/mapa' className="nextButton allButton border rounded-full m-12 p-2 pr-8 pl-8 md:text-xl usm:text-md">NEXT</Link>
                </div>
            </div>
        )
    )

}

export default Home;
