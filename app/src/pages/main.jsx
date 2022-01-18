import React from 'react';
import Logo from '../images/logolu.png';

function Main() {
    return (
        <main className="w-screen h-screen bg-gray-300">
            <div className="w-full h-3/4  ">
                <img src={Logo} className="w-1/6 h-3/6 p-4 float-right"></img>
            </div>
            <div className="w-full h-1/4 bg-red-700">
                <h1 classNeme="text-3xl ">Influencer Research</h1>
            </div>
        </main>
    )
}

export default Main;
