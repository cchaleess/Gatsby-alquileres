import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from './layout';
import { graphql } from 'gatsby';
import Iconos from './iconos';
import styled from 'styled-components';
import Map from './maps';
import { Carousel } from 'react-bootstrap';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    h3{
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #6c2eb9;
    }

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

const Sidebar = styled.aside`
margin-top: 2rem;
    .precio {
        font-size: 2rem;
        color: #ffc600;
        text-align: center;
    }
    .agente{
        margin-top: 4rem;
        border-radius: 2rem;
        background-color: #75ab00;
        padding: 2rem;
        color: #fff;
        h2{
            font-weight: bold;
            text-decoration: underline;
            margin-bottom: 2rem;
        }
        p{
            margin: 0;
        }
      
}
`;

export const query = graphql`
query ($id: String!) {
    allStrapiPisos(filter: {id: {eq: $id}}) {
      nodes {
            nombre
            precio
            habitaciones
            terraza
            parking
            wc
            id
            lat
            lon
            descripcion
            mascota
            vendedor {
                nombre
                telefono
            }
            imagen{
                localFile{            
                    sharp: childImageSharp{
                     gatsbyImageData
                }
             }
            }
        }
        }
    }
`     
  
const Pisos = ({data: { allStrapiPisos: {nodes}}}) => {

 const {nombre, imagen, precio, wc, habitaciones, terraza, parking, vendedor, descripcion, mascota, lat, lon} = nodes[0];
 //console.log(imagen);

    return (  

        <Layout>
            <Contenido>
                <main>
                   <h3>{nombre}</h3>
                    <hr />
                    <Carousel>
                        <Carousel.Item>
                            <GatsbyImage image={imagen[1].localFile.sharp.gatsbyImageData} alt={nombre} style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem'
                            }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <GatsbyImage image={imagen[2].localFile.sharp.gatsbyImageData} alt={nombre} style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem'
                            }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <GatsbyImage image={imagen[3].localFile.sharp.gatsbyImageData} alt={nombre} style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem'
                            }} />
                        </Carousel.Item>
                        <Carousel.Item>
                            <GatsbyImage image={imagen[4].localFile.sharp.gatsbyImageData} alt={nombre} style={{
                            width: '100%',
                            height: 'auto',
                            marginBottom: '2rem'
                            }} />
                        </Carousel.Item>
                    </Carousel>
                    <p>{descripcion}</p>
                     <Map lat={lat} lon={lon}/>                 
                </main>
                <Sidebar>
                    <p className="precio">€{precio}</p>
                    <Iconos
                        wc = {wc}
                        habitaciones = {habitaciones}
                        terraza = {terraza}
                        parking = {parking}
                        mascota = {mascota}
                        />
                        <div className="agente">
                          <h2>Contacto:</h2> 
                          <p>Nombre: {vendedor.nombre}</p> 
                          <p>Telefono: {vendedor.telefono}</p> 
                        </div>
                    </Sidebar>
            </Contenido>
        </Layout>
    );
}
 
export default Pisos;