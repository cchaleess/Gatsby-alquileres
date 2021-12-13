import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 3rem;

    @media (min-width:768px) { 
        padding: 0;
        flex-direction: row;
    }
`;
const NavLink = styled(Link)`
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;
    &:last-of-type {
        margin-right: 0;
    }
    &.pagina-actual {
        border-bottom: 1px solid #FFF;
    }
`;

const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink to="/" activeClassName="pagina-actual">Inicio</NavLink>            
            <NavLink to="/nosotros" activeClassName="pagina-actual">Nosotros</NavLink>            
            <NavLink to="/pisos" activeClassName="pagina-actual">Propiedades</NavLink>    
        </Nav>
     );
}
 
export default Navegacion;