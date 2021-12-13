import React, {useState, useEffect} from 'react'
import { css } from '@emotion/react';
import usePisos from '../hooks/usePisos';
import PisoPreview from './pisoPreview';
import * as listadoPisosCSS from '../css/listadoPisos.module.css';
import useFiltro from '../hooks/useFiltro';

const ListadoPisos = () => {

    const resultado = usePisos();
    const [pisos] =  useState(resultado); //referencia a la lista de pisos
    const [filtrados, setFiltrados] = useState([]);
    const {FiltroUI, categoria} = useFiltro();


    useEffect(() => {

        if(categoria) {
            const filtro = pisos.filter(piso => piso.opcion.tipo === categoria); //filtro por categoria
            setFiltrados(filtro);
        } else {
            setFiltrados(pisos);
        }
    }, [categoria, pisos]);

    return ( 
        <>
            <h2 css= {css`margin-top: 2rem;`}>Nuestros pisos</h2>
            {FiltroUI()}
            <ul className={listadoPisosCSS.propiedades}>
                {filtrados.map (piso => (
                <PisoPreview key={piso.id} piso = {piso}/>
            ))}
            </ul>
        </>
    
    );
}

export default ListadoPisos;

