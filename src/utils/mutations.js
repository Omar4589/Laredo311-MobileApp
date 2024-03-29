import {gql} from '@apollo/client';

export const CREATE_USER = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        firstName
        lastName
        email
      }
    }
  }
`;
export const UPDATE_USERNAME = gql`
  mutation updateUsername($newUsername: String!) {
    updateUsername(newUsername: $newUsername) {
      _id
      username
    }
  }
`;
export const UPDATE_PASSWORD = gql`
  mutation updatePassword(
    $email: String!
    $currentPassword: String!
    $newPassword: String!
  ) {
    updatePassword(
      email: $email
      currentPassword: $currentPassword
      newPassword: $newPassword
    ) {
      _id
      username
    }
  }
`;
