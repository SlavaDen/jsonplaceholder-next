import { UserEntity, UserInterface } from 'domains';
import { UserAdapter } from 'services';
import { UserAgent } from '../http';

export const UserService: UserInterface = {
  getUsers: async (): Promise<UserEntity[]> => {
    const users = await UserAgent.getUsers();

    return UserAdapter.toInternalUsers(users.data);
  },
};
