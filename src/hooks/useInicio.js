import { graphql, useStaticQuery } from "gatsby";

const useInicio = () => {

    const resultado = useStaticQuery(
        graphql`
            query {      
                allStrapiPaginas(filter: {nombre: {eq: "Inicio"}}) {
                nodes {
                    id
                    nombre
                    contenido
                    imagen {
                        localFile{
                         childImageSharp{
                            gatsbyImageData(width:1200)
                            fluid (maxWidth:1200){
                                ...GatsbyImageSharpFluid
                }
                    }
                }
                }
            }
        } 
    } 
        ` );
    return resultado.allStrapiPaginas.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen,
    }));
}
 
export default useInicio;