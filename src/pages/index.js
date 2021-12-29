import React from 'react'
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image'
import { convertToBgImage } from "gbimage-bridge"
import {titulo } from '../css/hero.module.css';//otra forma de importar css
import Encuentra from '../components/encuentra';
import ListadoPisos from '../components/listadoPisos';
import styled from 'styled-components';
import Footer from '../components/footer';

const ImagenBackground = styled(BackgroundImage)`
    height: 400px;
`;

const Index = () => {

   const inicio = useInicio();
   const {nombre, contenido, imagen} = inicio[0];
   //console.log(imagen.localFile.sharp.gatsbyImageData);
   const mainImg2 = imagen.localFile.sharp.gatsbyImageData;
   const bgImage = convertToBgImage(mainImg2);   

   return (
      <>
       <Layout>
            <ImagenBackground
               Tag="section"
               fadeIn="soft"
               {...bgImage}
               backgroundColor={`#85929E`}      
               >                 
                  <h1 className={titulo}>Encuentra tu espacio</h1>
               </ImagenBackground>
            <hr />          
           <main>
              <div
                  css={css`
                     max-width: 800px;
                     margin: 0 auto;
                     `}
               >       
                  <h1>{nombre}</h1>
                  <p>{contenido}</p>
              </div>
           </main>
           <Encuentra />
             <ListadoPisos />
         </Layout>
         <Footer />
         </>
     );
     
}
 
export default Index;