import React, { useState } from 'react'
import Logo from '../images/logolu.png'
import Intereses from '../components/intereses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useAuth0 } from "@auth0/auth0-react";

import '../styles/home.css'
function Home() {

    const [menu, setMenu] = useState(false);
    const showMenu = () => setMenu(!menu);
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div className="w-screen h-screen bg-gray-200">
                <header className="h-20 flex ">
                    <div className="w-1/2 flex">
                        <FontAwesomeIcon icon={faBars} onClick={showMenu} size="2x" className="color m-4" />
                        {/* <img src={user.picture} alt={user.name} className="h-2/5 mr-16 rounded-3xl" /> */}
                        <h1 className="color font text-xl mt-5 ml-3 ">{ user.name }</h1>
                    </div>

                    <div className="w-1/2 flex justify-end">
                        <h1 className="color font-bold text-xl mt-5 ">INFLUENCER RESEARCH</h1>
                        <img src={Logo} alt="logo of influencer research" className="w-12 h-16 m-1 mr-6"></img>
                    </div>
                </header>

                <div className={menu ? 'menu active' : 'menu'} ></div>

                <div>
                    <Intereses />
                </div>
            </div>
        )
    )
}

export default Home;
