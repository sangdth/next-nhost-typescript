// Beware: gql from @apollo/client has problem with tests
import gql from 'graphql-tag';

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

export const USERS_AGGREGATE = gql`
  query USERS_AGGREGATE($limit: Int!, $offset: Int!) {
    users_aggregate(limit: $limit, offset: $offset) {
      nodes {
        id
        display_name
        avatar_url
      }
    }
  }
`;
