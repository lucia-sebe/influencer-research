import React from 'react';
import Logo from '../images/logolu.png';

function Home() {
    return (
        <div className="w-screen h-screen">
            <header className="h-20	bg-gray-300	flex">
                <div className="w-3/4 h-full">
                    <h1 className="text-red-600 font text-xl mt-5 ml-3 ">Name User</h1>
                </div>
                <div className="w-1/4 h-full flex">
                    <h1 className="text-red-600 font-bold text-xl mt-5 ">INFLUENCER RESEARCH</h1>
                    <img src={Logo} className="w-12 h-16 m-1 mr-6"></img>
                </div>
            </header>
        </div>
    )
}

export default Home;
