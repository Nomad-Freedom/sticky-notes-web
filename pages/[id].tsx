import type { NextPage } from "next";
import Note from "../src/components/Note";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useGetNote } from "../src/hooks/useGetNote";
import NoteForm from "../src/components/NoteForm";
import { useDeleteNote } from "../src/hooks/useDeleteNote";
import { useUpdateNote } from "../src/hooks/useUpdateNote";
import { UpdatedNote } from "../src/interfaces";

const NotePage: NextPage = () => {
  const {
    query: { id },
    push,
  } = useRouter();
  const { mutate: deleteNote } = useDeleteNote(id as string);
  const { mutate: updateNote } = useUpdateNote(id as string);
  const { data } = useGetNote(id as string);

  const handleDelete = () => {
    deleteNote();
    push("/");
  };

  const handleUpdate = (note: UpdatedNote) => {
    updateNote(note);
    push("/");
  };

  return (
    <>
      {data && (
        <NoteForm
          data={data}
          handleDelete={handleDelete}
          handleSave={handleUpdate}
        />
      )}
    </>
  );
};

export default NotePage;
