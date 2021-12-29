import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "../src/components/Link";

const About: NextPage = () => {
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
        <Box maxWidth="sm">
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the home page
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default About;
