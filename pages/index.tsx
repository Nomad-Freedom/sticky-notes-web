import type { NextPage } from "next";
import { useGetNotes } from "../src/hooks/useGetNotes";
import Note from "../src/components/Note";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data, isError, error } = useGetNotes();
  const router = useRouter();
  function handleNoteClick(id: string): void {
    router.push(`/${id}`);
  }
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {data?.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Box
              sx={{ cursor: "pointer", userSelect: "none" }}
              onClick={() => handleNoteClick(note.id)}
            >
              <Note data={note} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
