const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type File {
    filename: String!
  }

  type Query {
    # This is only here to satisfy the requirement that at least one
    # field be present within the 'Query' type.
    otherFields: Boolean!
  }

  type Mutation {
    upload(file: Upload!): File!
  }
`;

module.exports = typeDefs;
