import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby';
import Navegacion from './navegacion';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const EnlaceHome = styled(Link)`
    color: #FFF;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {

    //Consulta logo.svg

    const { logo } = useStaticQuery(graphql` 
    
    query {
        logo: file(relativePath: {eq: "logo.svg"}){
          publicURL
        }
      }   
    `);
     //console.log(logo);

    return ( 

        <header   css={css`
        background-color: #2C3E50;
        padding: 1rem;
        border-bottom: 2px solid #FFF;
    `}>
            <div  css={css`
                    max-width: 1200px;
                    margin: 0 auto;
                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}>

       { <EnlaceHome to='/'>            
          <img src={logo.publicURL} alt="Logo Alquileres" width='130px'/>
        </EnlaceHome>}
        
            <Navegacion />
            </div>
        </header>
     );
}
 
export default Header;