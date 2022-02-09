import axios from "axios";
import { UpdatedNote, Note, CreatedNote } from "../interfaces";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function getNotes(): Promise<Note[]> {
  return api.get<Note[]>("/notes").then((res) => res.data);
}

export function getNote(id: string): Promise<Note> {
  return api.get<Note>(`/notes/${id}`).then((res) => res.data);
}

export function updateNote(id: string, data: UpdatedNote): Promise<Note> {
  return api.patch<Note>(`/notes/${id}`, data).then((res) => res.data);
}

export function createNote(data: CreatedNote): Promise<Note> {
  return api.post<Note>(`/notes`, data).then((res) => res.data);
}

export function DeleteNote(id: string) {
  return api.delete<void>(`/notes/${id}`);
}
