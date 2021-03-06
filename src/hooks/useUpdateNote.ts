import { useMutation, useQueryClient } from "react-query";
import { UpdatedNote } from "../interfaces";
import { updateNote } from "../utils/api";
import { useRouter } from "next/router";

export const useUpdateNote = (id: string) => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation((data: UpdatedNote) => updateNote(id, data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("notes");
      queryClient.setQueryData(["note", id], data);
      push("/");
    },
  });
};
