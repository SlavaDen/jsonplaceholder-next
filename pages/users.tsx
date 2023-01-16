import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';
import { memo, useEffect, useState } from 'react';
import { UserService } from 'services';
import { UsersProps } from './types';

const UsersProto = ({ users }: UsersProps) => {
  return (
    <div>
      {users.map((user) => (
        <Card key={user.id}>
          <CardContent>
            <CardHeader
              avatar={<Avatar aria-label='recipe'>{user.name}</Avatar>}
              title={user.name}
              subheader={user.username}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

const Users = memo(UsersProto);
export default Users;

export async function getStaticProps() {
  const users = await UserService.getUsers();

  return {
    props: {
      users,
    },
  };
}
