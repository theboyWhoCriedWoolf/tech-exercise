const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    todos: String
  }

  # type Mutation {
  # }
`;

module.exports = typeDefs;
