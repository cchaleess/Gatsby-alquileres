import React from 'react'
import Layout from '../components/layout';
import useInicio from '../hooks/useInicio';
import { css } from '@emotion/react';
import BackgroundImage from 'gatsby-background-image'
import { GatsbyImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"


const Index = () => {

   const inicio = useInicio();
   const {nombre, contenido, imagen} = inicio[0];
   console.log(imagen);
   const imagenfluid = imagen[0].localFile.sharp.fluid;
   const bgImage = convertToBgImage(imagenfluid);

   return ( 
        <Layout>
           <BackgroundImage 
               Tag="section"
               fluid={imagenfluid}
               css={css`
                     height: 600px;
                     `}
                {...bgImage}
               fadeIn="soft">
                 <div><h1>jdjdjdj</h1></div> 
                              
           </BackgroundImage>

             <GatsbyImage 
                     image={imagenfluid} 
                     alt=""
                     />       
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