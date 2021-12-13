import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display:flex;
    justify-content:space-between;
    flex: 5;
    max-width:500px;
    margin:3rem auto 0 auto; ;
    li{
        display: flex;
        img{
            margin-right: 1rem;
        }
    }
`;
const Iconos = ({wc,habitaciones, terraza, parking, mascota}) => {

    const {iconos} = useStaticQuery(graphql`
    
        query {
            iconos: allFile(filter: {relativeDirectory:{
            eq:"iconos"}
            }) {
            edges {
                node {
                id
                publicURL
                }
            }
            }
            }
    `)
    //console.log(iconos);
    const imagenesIconos = iconos.edges;
        return ( 
            <ListadoIconos>
                <li>
                    <img src={imagenesIconos[6].node.publicURL} alt="wc" />
                    <p>{wc}</p>
                </li>
                <li>
                    <img src={imagenesIconos[1].node.publicURL} alt="habitaciones" />
                    <p>{habitaciones}</p>
                </li>                
                    {terraza ?  <li><img src={imagenesIconos[8].node.publicURL} alt="terraza" /> </li> : null}
                    {parking ? <li><img src={imagenesIconos[5].node.publicURL} alt="parking" /></li> : null}
                    {mascota ? <li><img src={imagenesIconos[0].node.publicURL} alt="mascota" /></li> : null}               
            </ListadoIconos>
         );
}
 
export default Iconos;