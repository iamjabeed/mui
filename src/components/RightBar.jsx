import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      flex="2"
      padding={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      <Box position="fixed">
        Hello
      </Box>
    </Box>
  );
};

export default RightBar;
