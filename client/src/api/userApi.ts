// src/api/userApi.ts
import axios from "axios";

const API_URL = "http://localhost:3000/api/users";

export const fetchUsersApi = () => axios.get(API_URL);

export const addUserApi = (user: { name: string; email: string }) =>
  axios.post(API_URL, user);

export const updateUserApi = (
  id: string,
  user: { name: string; email: string }
) => axios.put(`${API_URL}/${id}`, user);

export const deleteUserApi = (id: string) => axios.delete(`${API_URL}/${id}`);
