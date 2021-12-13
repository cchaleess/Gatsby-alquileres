import React, {useState} from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Formulario = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #e1e1e1;
    margin-top: 2rem;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`;

const Select = styled.select`
    flex: 1;
    border: none;
    padding: 1rem;
    appearance: none;
    font-family: 'Lato', sans-serif;
`;

const useFiltro = () => {

    //reaccionar al filtro de opciones
    const [categoria, setCategoria] = useState('');

    const resultado = useStaticQuery(graphql`
    query  {
        allStrapiOpcions{
            nodes{
                tipo
                id
            }
         }
      }
    `)
      
    const categorias = resultado.allStrapiOpcions.nodes;
    //console.log(categorias);
    const FiltroUI = () => (
        <Formulario>
            <Select onChange = {e => setCategoria(e.target.value)} value = {categoria} >
            <option value="">-- Filtrar --</option>
                {categorias.map(opcion => (
                    <option key={opcion.id} value={opcion.tipo}>{opcion.tipo}</option>
                ))}              
            </Select>
        </Formulario>
    )

    return {
        categoria,
        FiltroUI
    }
}
export default useFiltro;