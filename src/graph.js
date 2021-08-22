import { gql } from "@apollo/client";

const User = gql`
  query getUser($id:ID!){
    user(_id:$id){
      email
    }
  }
`;

const CreateUser = gql`
  mutation createUser($email:String!) {
    createUser(
      input: {
        email: $email
      }
    ) {
      email
      _id
      createdAt
      updatedAt
      apiKey
      landing
      visitCard {
        url
        name
      }
    }
  }
`;

const UpdateUser = gql`
  mutation {
    updateUser(
      _id: "7b1c130c8f788dd92af0c1b1"
      input: {
        email: "Budsidgi ohanu."
        apiKey: "Ri ep."
        landing: "Doguvam isogopa."
        visitCard: {
          url: "http://reftu.mk/raztat.png"
          name: "jisirli.png"
        }
      }
    ) {
      email
      _id
      createdAt
      updatedAt
      apiKey
      landing
      visitCard {
        url
        name
      }
    }
  }
`;

export {User, CreateUser, UpdateUser};