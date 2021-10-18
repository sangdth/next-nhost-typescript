import React from 'react';
import { useQuery } from '@apollo/client';
import {
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  WithPrivateRoute,
} from '@/components';
import { USERS_AGGREGATE } from '@/lib/graphqls';
import type { UsersAggregateData } from '@/lib/types';

const Users = () => {
  const { data, loading } = useQuery<UsersAggregateData>(USERS_AGGREGATE, {
    variables: {
      limit: 10,
      offset: 0,
    },
    context: {
      headers: {
        'x-hasura-role': 'me',
      },
    },
  });

  return (
    <>
      <Heading>User Dashboard</Heading>

      <Table variant="simple">
        <TableCaption>Users aggregate data query result</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data?.users_aggregate.nodes.map((o) => (
            <Tr key={o.id}>
              <Td>{o.id}</Td>
              <Td>{o.display_name}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </>
  );
};


export default WithPrivateRoute(Users);
