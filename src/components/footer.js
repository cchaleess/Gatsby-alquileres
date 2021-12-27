import React from 'react'
import styled from 'styled-components';

export const Box = styled.div`
    padding-top: 2rem;
    border: 5px solid #e6e6e6;
    background: #1e779b;;
    position: relative;
    bottom: 0;
    width: 100%;
    height: 50%;
    text-align: center;
    @media (max-width: 1000px) {
        color: #fff;
        font-size: 1 rem;
    }
`;
export const Container = styled.div`
    display: column;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;
`;
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, 
                           minmax(200px, 1fr));
  }
`;   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 15px;
  font-size: 14px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;   
export const Heading = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const Footer = () => {
    return ( 
        <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Sobre nosotros</Heading>
              <FooterLink href="#">Historia</FooterLink>            
            </Column>
            <Column>
              <Heading>Servicios</Heading>
              <FooterLink href="#">Tasamos tu vivienda</FooterLink>             
            </Column>
            <Column>
              <Heading>Contacto</Heading>
              <FooterLink href="#">Solicitar visita</FooterLink>             
            </Column>
            <Column>
              <Heading>Redes</Heading>
              <FooterLink href="#">Facebook</FooterLink>            
            </Column>
          </Row>
             <hr />
            <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados - </p>
        </Container>     
      </Box>
    );
  };
export default Footer;
