import { useMutation, useQueryClient } from "react-query";
import { UpdatedNote } from "../interfaces";
import { updateNote } from "../utils/api";

export const useUpdateNote = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation((data: UpdatedNote) => updateNote(id, data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("notes");
      queryClient.setQueryData(["note", id], data);
    },
  });
};
