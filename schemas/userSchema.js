const { gql } = require('apollo-server-express');

const userSchema = gql`
  type User {
    id: Int
    name: String
    age: Int
  }

  type Query {
    users: [User]
    user(id: Int!): User
  }

`;

module.exports = { userSchema };
