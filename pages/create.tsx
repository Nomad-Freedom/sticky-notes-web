import type { NextPage } from "next";
import NoteForm from "../src/components/NoteForm";
import { CreatedNote, UpdatedNote } from "../src/interfaces";
import { useCreateNote } from "../src/hooks/useCreateNote";

const NotePage: NextPage = () => {
  const { mutate: createNote } = useCreateNote();
  const defaultNote: CreatedNote = { title: "", description: "", color: "one" };

  const handleCreate = (note: UpdatedNote) => {
    createNote(note);
  };

  return (
    <>
      <NoteForm data={defaultNote} handleSave={handleCreate} handleClose />
    </>
  );
};

export default NotePage;
