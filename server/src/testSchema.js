const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    "Get test array for homepage grid with very important info"
    test(p1: String): Test!
  }
  "A test is a group of Modules that teaches about a specific topic"
  type Test @key(fields: "id") {
    id: ID!
    "The test's title"
    title: String!
  }
`;
module.exports = typeDefs;