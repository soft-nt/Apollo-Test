const { gql } = require("apollo-server");

const typeDefs = gql`
  extend type Query {
    "Get test array for homepage grid with very important info"
    cat(p1: String): Cat!
  }
  "A test is a group of Modules that teaches about a specific topic"
  type Cat {
    subCat1: SubCat,
    subCat2: SubCat
  }

  type SubCat @key(fields: "id") {
    id: ID!
    title: String!
  }
`;
module.exports = typeDefs;