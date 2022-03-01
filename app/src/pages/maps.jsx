import React, { useState } from 'react'
import GoogleMap from 'google-map-react'
import MapsMarker from '../components/mapsMarker'
import Recomendaciones from '../components/recomendaciones'
import Logo from '../images/logolu.png'
import '../styles/maps.css'

const Maps = () => {
    const [markers, setMarkers] = useState([])

    const props = {
        center: [-34.908554, -56.163342],
        zoom: 7,
    }

    const addMarker = (info) => {
        const { lat, lng } = info;
        setMarkers([{
            lat,
            lng
        }]);
    }

    return (
        <div className="fondo w-screen h-screen ">
            <div className="h-1/6 flex">
                <div className="w-1/2">
                    <p className="color text-xl">Seleccione un punto en el mapa ... vera los canales según el area y sus intereses</p>
                </div>
                <div className="2xl:w-1/2 lg:w-3/4 usm:w-1/2 flex justify-end">
                    <h1 className="color font-bold md:text-xl sm:text-l mt-5 ">INFLUENCER RESEARCH</h1>
                    <img src={Logo} alt="logo of influencer research" className="md:w-12 md:h-16 md:m-1 md:mr-6 usm:w-6 usm:h-8 usm:mt-4 usm:ml-4 usm:mr-4"></img>
                </div>
            </div>

            <div className="h-5/6 flex">
                <div className="w-4/6 h-6/6">
                    <GoogleMap
                        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
                        center={props.center}
                        zoom={props.zoom}
                        onClick={addMarker}
                    >
                        {markers?.map((element, i) => <MapsMarker
                            key={i}
                            lat={element.lat}
                            lng={element.lng}
                        />)}
                    </GoogleMap>
                </div>
                <div className="w-2/6">
                    <Recomendaciones location = { markers }
                    />
                </div>
            </div>
        </div>
    )
}

export default Maps;
