import { useQuery } from "react-query";
import { getNotes } from "../utils/api";

export const useGetNotes = () => {
  return useQuery("notes", getNotes, {
    initialData: [],
  });
};
