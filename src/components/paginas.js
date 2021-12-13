import React from 'react'
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage } from "gatsby-plugin-image";
import Footer from './footer';


const ContenidoPagina = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`;

export const query = graphql`
    query($id:String!) {
        allStrapiPaginas(filter: {id: {eq: $id}}) {
        nodes {
            id
            nombre
            contenido
            imagen{
                localFile{
                    sharp:childImageSharp{
                        gatsbyImageData(width:1200)
                        }
                    }
                }
            }
        }
    }
`;

const Paginas = ({data: { allStrapiPaginas: {nodes}}}) => {

    console.log(nodes);

//imagen[0].localFile.childImageSharp.gatsbyImageData
 const {nombre, imagen, contenido} = nodes[0];
    return (  

        <Layout>
                <main className="contenedor">
                    <h1>{nombre}</h1>
                        <ContenidoPagina>
                                <GatsbyImage 
                                image={imagen[0].localFile.sharp.gatsbyImageData}
                                alt={nombre}
                                />
                            <h3>{contenido}</h3>
                        </ContenidoPagina>
                </main>
                   <Footer />

        </Layout>
    );
}

export default Paginas;