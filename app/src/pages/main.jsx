import React from 'react';
import Logo from '../images/logolu.png';
import { LoginButton } from '../auth0/login';
import '../styles/main.css';

function Main() {
    return (
        <main className="w-screen h-screen bg-gray-200"> 
            <div>
                <img src={Logo} alt="logo from influencer research" className="logo w-1/6 pt-16"/>
                <h1 className="color text-center font-bold text-3xl mt-5 ">INFLUENCER RESEARCH</h1>
            </div>
            <div className="text-center mt-16">
                <button className="loginButton allButton color border rounded-full border-solid mt-4 p-2 pr-4 pl-4 text-xl"><LoginButton/></button>
            </div>
        </main>
    )
}

export default Main;
