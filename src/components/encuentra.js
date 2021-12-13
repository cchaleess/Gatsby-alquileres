import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled';
import {imagenbg, titulo} from '../css/hero.module.css';//otra forma de importar css

const ImagenBackground = styled(BackgroundImage)`
    height: 300px;
`

const Encuentra = () => {

    const {imagen} = useStaticQuery(graphql`
        query {
            imagen: file(relativePath: {eq: "encuentra.jpg"}) {
                sharp: childImageSharp {
                    fluid(quality: 90, maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }    
            }
        }
    `)

    //console.log(imagen);

    return (
        <ImagenBackground
            tag="section"
            fluid={imagen.sharp.fluid}
            fadeIn="soft">
                <div className={imagenbg}>
                    <h3 className= {titulo}>El lugar que necesitas</h3>
                    <p>Contacto sin intermediarios</p>
                </div>

        </ImagenBackground>
    )
}
 
export default Encuentra;