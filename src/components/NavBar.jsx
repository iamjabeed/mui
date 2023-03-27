import React, { useState } from "react";
import { AcUnit, Mail, Notifications } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  // padding: "10px",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap:"10px",
  placeItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));
const User = styled(Box)(({ theme }) => ({
  display: "flex",
  gap:"10px",
  placeItems:"center",
  [theme.breakpoints.up('sm')]:{
    display: "none",
  }
}));

const NavBar = () => {
const [open,setOpen]=useState(false)

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", md: "block" } }}>
          JABEED
        </Typography>
        <AcUnit sx={{ display: { xs: "block", md: "none" } }} />
        <Search>
          <InputBase placeholder="Search.." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{height:30, width:30}} src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png" onClick={e=>setOpen(true)}/>
        </Icons>
        <User>
        <Avatar sx={{height:30, width:30}} src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          onClick={e=>setOpen(true)}
        />
        <Typography>JADDU</Typography>
        </User>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={}
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default NavBar;
