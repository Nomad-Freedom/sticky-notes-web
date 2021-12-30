import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import { useGetNotes } from "../src/hooks/useGetNotes";
import Note from "../src/components/Note";
import { Grid } from "@mui/material";

const Home: NextPage = () => {
  const { data, isError, error } = useGetNotes();
  console.log(data);
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {data?.map((note) => (
          <Grid item xs={12} sm={6} md={4} key={note.id}>
            <Note data={note} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Home;
