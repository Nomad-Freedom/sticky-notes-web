import type { NextPage } from "next";
import Note from "../src/components/Note";
import { Grid } from "@mui/material";
import { useRouter } from "next/router";
import { useGetNote } from "../src/hooks/useGetNote";
import NoteForm from "../src/components/NoteForm";
import { useDeleteNote } from "../src/hooks/useDeleteNote";

const NotePage: NextPage = () => {
  const {
    query: { id },
    push,
  } = useRouter();
  const { mutate } = useDeleteNote(id as string);
  const { data } = useGetNote(id as string);

  const handleDelete = () => {
    mutate();
    push("/");
  };

  return <>{data && <NoteForm data={data} handleDelete={handleDelete} />}</>;
};

export default NotePage;
