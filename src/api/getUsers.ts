import { UserType } from '../interfaces';

const API_URL = 'https://jsonplaceholder.typicode.com';

const getData = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();

  return data;
};

export const getUsers = async (): Promise<UserType[]> => {
  return getData<UserType[]>(`${API_URL}/users`);
};
