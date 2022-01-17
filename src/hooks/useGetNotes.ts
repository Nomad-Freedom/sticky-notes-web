import { useQuery } from "react-query";
import { Note } from "../interfaces";
import { getNotes } from "../utils/api";

export const useGetNotes = () => {
  return useQuery<Note[], Error>("notes", getNotes, {
    initialData: [],
  });
};
