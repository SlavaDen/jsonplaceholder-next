import { UserEntity } from 'domains';
import { UserDTO } from 'services';

export const UserAdapter = {
  toInternalUsers: (users: UserDTO[]): UserEntity[] => {
    if (Array.isArray(users)) {
      return users.map((user) => {
        return {
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          phone: user.phone,
          website: user.website,
          city: user.address.city,
          company: user.company.name,
        };
      });
    }

    return [];
  },
};
