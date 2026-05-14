import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
});

export interface Task {
  _id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
  dueDate?: string | undefined;
  createdAt: string;
  updatedAt: string;
}

export const fetchTasks = async () => {
  const response = await api.get('/tasks');
  return response.data;
};

export const createTask = async (task: Partial<Task>) => {
  const response = await api.post('/tasks', task);
  return response.data;
};

export const updateTask = async (id: string, task: Partial<Task>) => {
  const response = await api.put(`/tasks/${id}`, task);
  return response.data;
};

export const deleteTask = async (id: string) => {
  const response = await api.delete(`/tasks/${id}`);
  return response.data;
};

export default api;
