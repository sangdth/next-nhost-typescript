import { gql } from '@apollo/client';

export const GET_SELF = gql`
  query getSelf($user_id: uuid!) {
    users_by_pk(id: $user_id) {
      id
      display_name
      account {
        id
        email
      }
    }
  }
`;
