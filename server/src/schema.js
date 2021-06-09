const { gql } = require("apollo-server");

const typeDefs = gql`
  # Schema definitions go here
  type Query {
    "Get tracks array for homepage grid with very important info"
  }
`;
module.exports = typeDefs;
