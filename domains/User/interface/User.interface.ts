import { UserEntity } from '../entity';

export interface UserInterface {
  getUsers: () => Promise<UserEntity[]>;
}
