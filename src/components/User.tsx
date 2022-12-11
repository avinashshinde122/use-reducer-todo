import React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { IUser } from "../types";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    width: 300,
    margin: theme.spacing(1),
    cursor: "pointer",
    "&hover": {
      elevation: "2",
    },
  },
}));

type UserType = {
  user: IUser;
};
const User = ({ user }: UserType) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea sx={{ display: "flex", justifyContent: "flex-start" }}>
        <CardMedia
          component="img"
          sx={{ width: 100 }}
          image={user.avatar_url}
          alt={user.login}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {user.login}
            </Typography>
          </CardContent>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default User;
