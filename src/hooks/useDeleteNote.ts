import { useMutation, useQueryClient } from "react-query";
import { DeleteNote } from "../utils/api";
import { useRouter } from "next/router";

export const useDeleteNote = (id: string) => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  return useMutation(() => DeleteNote(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("notes");
      push("/");
    },
  });
};
