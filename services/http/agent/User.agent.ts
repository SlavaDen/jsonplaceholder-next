import axios, { AxiosResponse } from 'axios';
import { GetUsersDTO } from 'services';
import { instance } from './Basic.agent';

export const UserAgent = {
  getUsers: async (): Promise<AxiosResponse<GetUsersDTO>> => {
    const response = await instance.get('users');

    return response;
  },
};
