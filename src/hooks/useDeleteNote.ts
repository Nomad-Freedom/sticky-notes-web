import { useMutation, useQueryClient } from "react-query";
import { DeleteNote } from "../utils/api";

export const useDeleteNote = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => DeleteNote(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
    },
  });
};
