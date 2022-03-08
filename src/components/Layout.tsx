import React from "react";
import Container from "@mui/material/Container";
import Nav from "./Nav";
import Copyright from "./Copyright";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Container maxWidth="lg" disableGutters={false}>
      <Nav />
      <Box
        sx={{
          minHeight: {
            xs: "calc(100vh - 76.2px)",
            sm: "calc(100vh - 84.2px)",
          },
        }}
      >
        {children}
      </Box>
      <Copyright />
    </Container>
  );
}

export default Layout;
