const { ApolloServer, gql } = require('apollo-server-micro')
const cors = require('micro-cors')()
const colors = require('./colors.json')

const typeDefs = gql`
  type Color {
    name: String!
    value: String!
  }

  type Query {
    colors: [Color!]!
    color(name: String!): Color!
  }
`

const resolvers = {
  Query: {
    colors: () => colors,
    color: (_, { name }) => books.find(book => book.name === name)
  }
}

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
})

module.exports = cors(apolloServer.createHandler())
