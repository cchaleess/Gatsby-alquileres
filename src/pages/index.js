import React from 'react'
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image'
import { getImage, GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"

const Index = () => {

   const inicio = useInicio();
   const {nombre, contenido, imagen} = inicio[0];
   console.log(imagen);
   const imagenGatsby = getImage(imagen[0].localFile.childImageSharp.gatsbyImageData);
   const bgImage = convertToBgImage(imagenGatsby);

   return ( 
        <Layout>
           <BackgroundImage 
               Tag="section"
               css = {css`
                  height: 600px;`}
                {...bgImage}
               preserveStackingContext
               fadeIn="soft"
               >
               <GatsbyImage image={imagenGatsby} alt=""/>
               </BackgroundImage>
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
        </Layout>
     );
     
}
 
export default Index;