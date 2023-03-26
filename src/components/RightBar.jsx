import { Box } from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box
      bgcolor={"yellow"}
      flex="2"
      padding={2}
      sx={{ display: { xs: "none", md: "block" } }}
    >
      RightBar
    </Box>
  );
};

export default RightBar;
