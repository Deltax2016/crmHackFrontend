import { gql } from "@apollo/client";

const User = gql`
  query getUser($id:ID!){
    user(_id:$id){
      email
    }
  }
`;

export {User};