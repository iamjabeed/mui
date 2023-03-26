import React from "react";
import { AcUnit } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const styledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  padding: "1rem",
});

const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <styledToolbar>
          <Typography variant="h6" sx={{display:{xs:"none", md:"block"}}}>JABEED</Typography>
          <AcUnit  sx={{display:{xs:"block", md:"none"}}}/>
        </styledToolbar>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
