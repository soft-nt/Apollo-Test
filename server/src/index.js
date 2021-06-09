const { ApolloServer, MockList } = require("apollo-server");
const {ApolloGateway} = require('@apollo/gateway')

const gateway = new ApolloGateway({
  serviceList: [
    {"name": "tracks", "url": "http://localhost:4001"},
    {"name": "test", "url": "http://localhost:4002"}
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen().then(({url}) => {
  console.log(`Main server ready at ${url}`);
});
