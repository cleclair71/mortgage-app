const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    email: String
    contactMessages: [ContactMessage]
  }

  type ContactMessage {
    _id: ID
    name: String
    email: String
    message: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    contactMessages: [ContactMessage]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    addContactMessage(name: String!, email: String!, message: String!): ContactMessage
  }
`;

module.exports = typeDefs;
