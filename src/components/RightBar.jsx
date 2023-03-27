import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const RightBar = () => {
  return (
    <Box flex="2" padding={2} sx={{ display: { xs: "none", md: "block" } }}>
      <Box position="fixed" width={250}>
        <Typography sx={{ fontWeight: 200 }}>Online Friends</Typography>
        <AvatarGroup max={6} spacing={1}>
          <Avatar
            alt="Agnes Walker"
            src="https://cdn.pixabay.com/photo/2020/05/08/02/55/african-american-5143919__480.png"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://cdn.pixabay.com/photo/2018/08/28/14/09/avatar-3637645__480.png"
          />
          <Avatar
            alt="Travis Howard"
            src="https://cdn.pixabay.com/photo/2013/07/12/15/24/woman-149861__480.png"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__480.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2018/08/28/13/29/avatar-3637561__480.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2018/09/15/19/23/avatar-3680134__480.png"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://cdn.pixabay.com/photo/2018/08/28/14/40/avatar-3637701__480.png"
          />
        </AvatarGroup>
        <Typography sx={{ fontWeight: 200 }} mt={2}>
          Recent Photos
        </Typography>
        <ImageList>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2017/12/10/17/00/robot-3010309__480.jpg"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/25/23/32/wormhole-739872__480.png"
              alt=""
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography sx={{ fontWeight: 200 }}>Latest conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  alt="Remy Sharp" src="https://media.istockphoto.com/id/1466907836/photo/valentines-day-image-female-character-making-heart-gesture-with-hands-isolated-on-white.jpg?b=1&s=170667a&w=0&k=20&c=YeG0CzXWAkLZvp7RZPW7Wj5rb_HgQrt53p4fB8woMmA=" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://media.istockphoto.com/id/1391785761/photo/3d-illustration-of-young-smiling-woman-ellen-talking-phone-calling-by-telephone-communication.jpg?b=1&s=170667a&w=0&k=20&c=frzisX6gDMmSSV7qFqtg90Fcb6ErXMHqEatjVPLah5Q=" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://media.istockphoto.com/id/1393272759/photo/3d-illustration-of-a-smiling-african-american-man-david-talking-phone-calling-by-telephone.jpg?b=1&s=170667a&w=0&k=20&c=MZn12AhoyUYFaD9VO1_6thEOWXJG69gVJpso44D2iok=" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default RightBar;
