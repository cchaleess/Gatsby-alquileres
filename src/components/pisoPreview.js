import React from 'react'
import styled from 'styled-components';
import Iconos from './iconos';
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';
import urlSlug from 'url-slug';

const Boton = styled(Link)`
    color: #fff;
    margin-top: 2rem;
    background-color: #75ab00;
    width: 100%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    text-transform: uppercase;
    font-weight: 700;
    `;

const Card = styled.div`
border: 1px solid #e1e1e1;
img{
    max-width: 100%;
}
`;

const Contenido = styled.div` 
    padding: 2rem;
    h3{
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .precio{
        font-size: 2rem;
        color: #ff5a5f;
    }
`;

const PisoPreview = ({piso}) => {
    const {nombre, 
            wc,precio,terraza,habitaciones,parking, imagen, mascota} = piso;
            
    return ( 
        <Card>
            <GatsbyImage 
                image= {imagen} 
                alt="pisos"
                />
            <Contenido>
               <h3>{nombre}</h3>
               <p className="precio">€{precio}</p>

               <Iconos 
                wc={wc}
                habitaciones={habitaciones}
                terraza={terraza}
                parking={parking}
                mascota={mascota}
               />
               <Boton to= {urlSlug(nombre)}>Visitar</Boton>
            </Contenido>
        </Card>
     );
}
 
export default PisoPreview;