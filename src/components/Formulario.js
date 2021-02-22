import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ({ guardarBusquedaLetra }) => {

    const [busqueda, guardarBusqueda] = useState({
        artista: '',
        cancion: ''
    });
    const [error, guardarError] = useState(false);

    const { artista, cancion } = busqueda;

    // func para leer contenido 
    const actualizarBusqueda = (e) => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    // consultar las API's
    const buscarInfo = (e) => {
        e.preventDefault();
        // valicacion
        if (artista.trim() === '' || cancion.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        // Regresar el objecto al componente APP
        guardarBusquedaLetra(busqueda);

    }

    return (
        <div className="bg-info">
            { error && <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>}
            <div className="container">
                <div className="row">
                    <form
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                        onSubmit={ buscarInfo }
                    >
                        <fieldset>
                            <legend className="text-center">Buscador letras canciones</legend>
                        </fieldset>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="artista"
                                        placeholder="Nombre del artista"
                                        onChange={actualizarBusqueda}
                                        value={artista}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="cancion"
                                        placeholder="Nombre Canción"
                                        onChange={actualizarBusqueda}
                                        value={cancion}
                                    />
                                </div>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary float-rigth"
                        >Buscar
                        </button>

                    </form>
                </div>
            </div>
        </div>
    )
}

Formulario.propTypes = {

}

export default Formulario
