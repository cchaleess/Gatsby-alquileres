const urlSlug = require('url-slug');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
   query {
    allStrapiPaginas {
      nodes {
        id
        nombre
      }
    }
    allStrapiPisos{
      nodes{
        nombre
          id    
        }
    }
}
  `)
//  console.log(JSON.stringify(resultado.data.StrapiPisos));

  if (resultado.errors) {
    reporter.panicOnBuild(`Error al consultar GraphQL`, resultado.errors);
  }

  //Si hay resultados generamos las paginas
 const pisos = resultado.data.allStrapiPisos.nodes;
  const paginas = resultado.data.allStrapiPaginas.nodes;

  //Crear paginas
  paginas.forEach(pagina => {
    console.log(pagina.nombre);
    actions.createPage({
      path: urlSlug(pagina.nombre),
      component: require.resolve('./src/components/paginas.js'),
      context: {
        id: pagina.id,
      },
    })
  })
  //Crear los templates de los pisos
  pisos.forEach(piso => {
    //console.log(urlSlug(piso.nombre));
    actions.createPage({
      path: urlSlug(piso.nombre),
      component: require.resolve('./src/components/pisos.js'),
      context: {
        id: piso.id
      }
  })
  })
}
