import axios from "axios";
import { Note } from "../interfaces";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL });

export function getNotes(): Promise<Note[]> {
  return api.get<Note[]>("/notes").then((res) => res.data);
}

export function getNote(id: string): Promise<Note> {
  return api.get<Note>(`/notes/${id}`).then((res) => res.data);
}

export function DeleteNote(id: string) {
  return api.delete<void>(`/notes/${id}`);
}
