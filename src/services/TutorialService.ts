import axios from "axios";
import Tutorial from "../types/Tutorial";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});

const findAll = async () => {
  const response = await apiClient.get<Tutorial[]>("/tutorials");
  return response.data;
}

const findById = async (id: any) => {
  const response = await apiClient.get<Tutorial>(`/tutorials/${id}`);
  return response.data;
}

const findByTitle = async (title: string) => {
  const response = await apiClient.get<Tutorial[]>(`/tutorials?title=${title}`);
  return response.data;
}

const create = async ({ title, description }: Tutorial) => {
  const response = await apiClient.post<any>("/tutorials", { title, description });
  return response.data;
}

const update = async (id: any, { title, description, published }: Tutorial) => {
  const response = await apiClient.put<any>(`/tutorials/${id}`, { title, description, published });
  return response.data;
}

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/tutorials/${id}`);
  return response.data;
}

const deleteAll = async () => {
  const response = await apiClient.delete<any>("/tutorials");
  return response.data;
}

const TutorialService = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll
}

export default TutorialService;