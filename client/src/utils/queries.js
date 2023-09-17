import { gql } from '@apollo/client';

export const ADD_CLIENT = gql`
  mutation addClient($email: String!) {
    addClient(email: $email) {
      _id
      email
    }
  }
`;