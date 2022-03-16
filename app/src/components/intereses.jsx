import React, { useState } from 'react';
import '../styles/home.css';

function Intereses() {
    const intereses = ["Videojuegos", "Café", "Comida", "ASMR", "Autos", "Política", "Relajación", "Terror", "Música", "Viajes", "Literatura", "Comedia", "Deportes", "Cocina", "Ciencia", "Belleza", "Animación"];
    const [interesSeleccionado, setInteresSeleccionado] = useState([]);

    return (
        <div className="flex mx-auto grid 2xl:grid-cols-3 w-3/6 lg:grid-cols-2 md:grid-cols-1 lg:w-5/6">
            {intereses.map((item) => <button
                key={item}
                className={interesSeleccionado.includes(item) ? 'interes seleccionado' : 'interes button'}
                onClick={() => {
                    if (interesSeleccionado.includes(item)) {
                        setInteresSeleccionado(interesSeleccionado.filter((elemento) => elemento !== item))
                    } else {
                        setInteresSeleccionado([...interesSeleccionado, item])
                    }

                }
                }
            >{item}</button>)}
        </div>
    )
}

export default Intereses;
