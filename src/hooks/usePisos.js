import { graphql, useStaticQuery } from "gatsby";

const usePisos = () => {

const datos = useStaticQuery(graphql`
    query {
        allStrapiPisos {
            nodes {
                nombre
                descripcion
                id
                wc
                precio
                terraza
                habitaciones
                lat
                lon
                mascota
                parking
                opcion {
                    tipo
                    id
                }
                vendedor {
                    nombre
                    telefono
                }
                imagen {
                    localFile{
                        childImageSharp{
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    }
 `)
//console.log(datos);
    return datos.allStrapiPisos.nodes.map(piso => ({ id: piso.id, nombre: piso.nombre, descripcion: piso.descripcion, wc: piso.wc, precio: piso.precio,
            terraza: piso.terraza, opcion: piso.opcion, habitaciones: piso.habitaciones, lat: piso.lat, lon: piso.lon, parking: piso.parking,
            mascota: piso.mascota, vendedor: piso.vendedor,imagen: piso.imagen[0].localFile.childImageSharp.gatsbyImageData
        }))
};

export default usePisos;