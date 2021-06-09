const { ApolloServer, MockList } = require("apollo-server");
const { buildFederatedSchema } = require("@apollo/federation");
const typeDefs = require("./tracksSchema");
const resolvers = require("./tracksResolvers");
const TrackAPI = require("./datasources/track-api");

const port = 4001;

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen({ port }).then(({url}) => {
  console.log(`Track server ready at ${url}`);
});
