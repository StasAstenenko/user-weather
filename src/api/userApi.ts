import axios from 'axios';
import type { User, UserResponse } from '../types/userTypes';

export const getUsers = async (count: number): Promise<User[]> => {
  const { data } = await axios.get<UserResponse>(
    `https://randomuser.me/api/?results=${count}`
  );
  console.log(data);
  return data.results;
};
