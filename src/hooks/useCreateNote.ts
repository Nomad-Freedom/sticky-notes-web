import { useMutation, useQueryClient } from "react-query";
import { CreatedNote } from "../interfaces";
import { createNote } from "../utils/api";
import { useRouter } from "next/router";

export const useCreateNote = () => {
  const queryClient = useQueryClient();
  const { push } = useRouter();
  return useMutation((data: CreatedNote) => createNote(data), {
    onSuccess: (data) => {
      queryClient.invalidateQueries("notes");
      queryClient.setQueryData(["note", data.id], data);
      push("/");
    },
  });
};
