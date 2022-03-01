import React, { useState, useEffect } from 'react'

const Recomendaciones = ({ location }) => {
    const API_KEY = 'AIzaSyDEc047qDtqEJ65W0Tge6vs34A6jnubkfU';
    const BASE_URL = 'https://www.googleapis.com/youtube/v3/';
    const maxResults = 4;
    const order = "viewCount";
    const q = "music";
    const locationRadius = "500km";
    const [resultyt, setResultyt] = useState([]);
    const [queryLocation, setQueryLocation] = useState('6.321097%2C%20-10.807359');
    const finalURL = `${BASE_URL}search?part=snippet&location=${queryLocation}&locationRadius=${locationRadius}&maxResults=${maxResults}&order=${order}&q=${q}&type=video&key=${API_KEY}`;
    
    useEffect(() => {
        setQueryLocation(location[0]?.lat + "%2C%20" + location[0]?.lng);
        traerVideos();
    }, [location]);

    const traerVideos = () => {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setResultyt(responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId))
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            {
                resultyt.map((link, i) => {
                    let frame = <div key={i}><iframe width="300" height="150" src={link}></iframe></div>
                    return frame;
                })
            }
        </div>
    );
}

export default Recomendaciones;
