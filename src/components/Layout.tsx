import React from "react";
import Container from "@mui/material/Container";
import Nav from "./Nav";
import Copyright from "./Copyright";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <Container maxWidth="lg" disableGutters={true}>
      <Nav />
      {children}
      <Copyright />
    </Container>
  );
}

export default Layout;
