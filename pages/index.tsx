import type { NextPage } from "next";
import { useGetNotes } from "../src/hooks/useGetNotes";
import Note from "../src/components/Note";
import { Box, Grid, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { data, isError, isLoading } = useGetNotes();
  const router = useRouter();
  function handleNoteClick(id: string): void {
    router.push(`/${id}`);
  }

  if (isLoading) {
    return (
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <CircularProgress color="secondary" />
      </Box>
    );
  }
  if (isError) {
    return (
      <Box>
        <Typography color={"#ff0000"} align={"center"}>
          There was a server error sorry for the inconvenience.
        </Typography>
      </Box>
    );
  }
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {data?.map((note) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={note.id}
            sx={{
              display: "flex",
            }}
          >
            <Box
              sx={{
                cursor: "pointer",
                display: "flex",
                width: "100%",
                userSelect: "none",
              }}
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
