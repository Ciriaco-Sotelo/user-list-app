import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUsers = async (): Promise<User[]> => {
    const response = await axios.get<User[]>(API_URL);
    // Duplicamos los datos para tener más usuarios
    return Array(3).fill(response.data).flat().map((user, idx) => ({
      ...user,
      id: idx + 1,
      name: `Usuario ${idx + 1}: ${user.name}`,
      email: `user${idx + 1}_${user.email}`
    }));
  };

export const getUserById = async (id: number): Promise<User> => {
  const response = await axios.get<User>(`${API_URL}/${id}`);
  return response.data;
};