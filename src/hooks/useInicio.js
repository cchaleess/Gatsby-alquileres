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
                                sharp: childImageSharp {
                                    fluid(quality:90, maxWidth: 1200) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    ) 
    return resultado.allStrapiPaginas.nodes.map(inicio => ({
        nombre: inicio.nombre,
        contenido: inicio.contenido,
        imagen: inicio.imagen,
    }));
}
 
export default useInicio;