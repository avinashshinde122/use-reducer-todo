import React, { useState, useEffect } from "react";
import { IUser } from "../types";
import User from "./User";
import { Box } from "@mui/system";
import { searchUsers } from "../api/users";

const App = () => {
  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    (async () => {
      const result = await searchUsers("avinash");
      setUsers(result.items);
    })();
  }, []);

  return (
    <Box
      sx={{
        background: (theme) => theme.palette.background.default,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {users && (
        <Box
          sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
        >
          {users.map((user, index) => (
            <User key={`${user.login}-${index}`} user={user} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default App;
