import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($email: String!) {
    addUser(email: $email) {
      _id
      email
    }
  }
`;