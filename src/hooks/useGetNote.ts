import { useQuery } from "react-query";
import { Note } from "../interfaces";
import { getNote } from "../utils/api";

export const useGetNote = (id: string) => {
  return useQuery<Note, Error>(["notes", id], () => getNote(id));
};
