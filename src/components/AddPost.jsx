import { Add } from "@mui/icons-material";
import { Fab, Modal, styled, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const AddPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Create post"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "Calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <Add />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width="380px" height="240px"  bgcolor={"background.default"} color={"text.primary"} borderRadius={3}>
          <Typography id="modal-modal-title" variant="h6" color={"gray"} textAlign="center" mt={2} >
            Create new Post
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddPost;
