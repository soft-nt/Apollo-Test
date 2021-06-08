const { ApolloServer, MockList } = require("apollo-server");
const { buildFederetedSchema } = require("@apollo/federation");
const typeDefs = require("./schema");
const resolvers = require("./tracksResolvers");
const TrackAPI = require("./datasources/track-api");

const port = 4001;
const url = "http://localhost:3000";

const server = new ApolloServer({
  schema: buildFederetedSchema[{ typeDefs, resolvers }],
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen({ port }).then((url) => {
  console.log(`Track server ready at ${url}`);
});
