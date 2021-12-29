import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/components/Link";
import { useGetNotes } from "../src/hooks/useGetNotes";

const Home: NextPage = () => {
  const { data, isError, error } = useGetNotes();
  console.log(data);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
      </Box>
    </>
  );
};

export default Home;
