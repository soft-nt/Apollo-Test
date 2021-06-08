const {ApolloServer, MockList} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        trackAPI: new TrackAPI() 
      };
    },
    context: ({req}) => {
      const token = req.headers.authorization || '';
      console.log(req.headers.authorization);
        
      if (token != 'Bearer 123')
      throw new AuthenticationError('Please provide a correct bearer token');
    }
});


server.listen().then(() => {
    console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
  });
