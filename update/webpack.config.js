const path = require('path')
const WrapperPlugin = require('wrapper-webpack-plugin');

module.exports = (env, args) => {
  return {
    mode: 'production',
    entry: [
      './src/index.ts'
    ],
    output: {
      path: path.join(__dirname, '/dist/'),
      filename: 'rdflib.min.js',
      library: '$rdf',
      libraryTarget: 'umd'
    },
    module: {
      rules: [
        {
          test: /\.(js|ts)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(js|ts)$/,
          loader: "source-map-loader"
        }
      ]
    },
    resolve: { extensions: ['.js', '.ts'] },
    plugins: [
      new WrapperPlugin({
        // Fall back to window.fetch when solid-auth-client is not present,
        // so rdflib.js can still work outside of Solid
        header: `if (typeof window !== 'undefined') {
                   if (!window.solid)
                     window.solid = {}
                   if (!window.solid.auth)
                     window.solid.auth = { fetch: (a, b) => window.fetch(a, b) }
                 }`,
        footer: `
        let {term,NextId,fromNT,fetcher,graph,lit,st,sym,blankNode,defaultGraph,literal,namedNode,quad,triple,variable,isStatement,isStore,isCollection,isRDFlibObject,isVariable,isTerm,isLiteral,isQuad,isNamedNode,isBlankNode,isSubject,isPredicate,isRDFObject,isGraph,BlankNode,Collection,convert,DataFactory,Empty,Fetcher,Formula,Store,jsonParser,Literal,log,N3Parser,NamedNode,Namespace,Node,parse,Query,queryToSPARQL,RDFaProcessor,RDFParser,serialize,Serializer,SPARQLToQuery,sparqlUpdateParser,Statement,UpdateManager,UpdatesSocket,UpdatesVia,uri,Util,Variable,IndexedFormula,termValue} = rdflib;

        export {term,NextId,fromNT,fetcher,graph,lit,st,sym,blankNode,defaultGraph,literal,namedNode,quad,triple,variable,isStatement,isStore,isCollection,isRDFlibObject,isVariable,isTerm,isLiteral,isQuad,isNamedNode,isBlankNode,isSubject,isPredicate,isRDFObject,isGraph,BlankNode,Collection,convert,DataFactory,Empty,Fetcher,Formula,Store,jsonParser,Literal,log,N3Parser,NamedNode,Namespace,Node,parse,Query,queryToSPARQL,RDFaProcessor,RDFParser,serialize,Serializer,SPARQLToQuery,sparqlUpdateParser,Statement,UpdateManager,UpdatesSocket,UpdatesVia,uri,Util,Variable,IndexedFormula,termValue};`
      }),
    ],
    externals: {
      '@trust/webcrypto': 'crypto',
      'child_process': 'null',
      'node-fetch': 'fetch',
      'text-encoding': 'TextEncoder',
      'whatwg-url': 'window',
      'isomorphic-fetch': 'fetch',
      'fs': 'null',
      'solid-auth-client': {
        root: ['solid', 'auth'],
        commonjs: 'solid-auth-client',
        commonjs2: 'solid-auth-client',
      },
      'solid-auth-cli': 'null',
      'xmldom': 'window'
    },
    devtool: 'source-map'
  }
}
