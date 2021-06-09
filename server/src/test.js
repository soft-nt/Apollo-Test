const { ApolloServer } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const resolvers = require("./testResolvers");
const typeDefs = require("./testSchema");

const port = 4002;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers}])
});

server.listen({ port }).then(({url}) => {
  console.log(`Test server ready at ${url}`);
});
