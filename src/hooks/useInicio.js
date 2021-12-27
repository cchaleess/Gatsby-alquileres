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
                      imagen{
                                localFile{
                                        sharp:childImageSharp{
                                            gatsbyImageData(width:1200)
                            }
                        }
                      }
                    }
                  }
                }
                
        `
    ) 
    console.log(resultado);
    debugger;
    return resultado.allStrapiPaginas.nodes.map(inicio => ({      
        contenido: inicio.contenido,
        imagen: inicio.imagen,  
        nombre: inicio.nombre,
    }));
}
 
export default useInicio;