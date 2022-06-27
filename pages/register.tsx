import { Box, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../component/UserCard";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [allUsers, setAllUsers] = useState([
    {
      username: "",
      name: "",
      surname: ""
    }
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        // `https://cors-anywhere.herokuapp.com/${baseURL}/users`
        `https://api.allorigins.win/raw?url=${baseURL}/users`
      );
      setAllUsers(res.data);
    };
    fetchData().catch(console.error);
  }, []);
  const stackUserCards = [];
  if (allUsers) {
    for (var i = 0; i < allUsers.length; i += 4) {
      stackUserCards.push(
        <Stack
          key={"stackUserCards" + i}
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            mt: "40px"
          }}
        >
          <UserCard
            key={allUsers[i].username}
            username={allUsers[i].username}
            firstName={allUsers[i].name}
            lastName={allUsers[i].surname}
          />
          {i + 1 >= allUsers.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsers[i + 1].username}
              username={allUsers[i + 1].username}
              firstName={allUsers[i + 1].name}
              lastName={allUsers[i + 1].surname}
            />
          )}

          {i + 2 >= allUsers.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsers[i + 2].username}
              username={allUsers[i + 2].username}
              firstName={allUsers[i + 2].name}
              lastName={allUsers[i + 2].surname}
            />
          )}

          {i + 3 >= allUsers.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsers[i + 3].username}
              username={allUsers[i + 3].username}
              firstName={allUsers[i + 3].name}
              lastName={allUsers[i + 3].surname}
            />
          )}
        </Stack>
      );
    }
  }
  return (
    <>
      <Stack sx={{ mt: "110px", flexDirection: "row", mb: "-10px" }}>
        <Typography
          sx={{
            width: "380px",
            height: "73px",

            fontFamily: "Prompt",
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "47px",
            lineHeight: "73px",
            ml: "160px"
          }}
        >
          รายชื่อผู้ลงทะเบียน
        </Typography>
        <Box
          sx={{
            mt: "25px",
            width: "260px",
            height: "30px",
            borderRadius: "5px",
            ml: "auto",
            mr: "160px",
            backgroundColor: "white"
          }}
        >
          <TextField
            id="outlined-basic"
            label="ค้นหา"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                fontFamily: "Prompt",
                fontStyle: "normal",
                marginTop: "-4px",
                color: "rgba(180, 180, 180, 1)"
              }
            }}
            inputProps={{
              style: {
                fontFamily: "Prompt",
                fontStyle: "normal",
                padding: "0",
                height: "32px",
                paddingLeft: "10px"
              }
            }}
            sx={{ width: "260px" }}
          />
        </Box>
      </Stack>
      <Box
        sx={{
          width: "calc(100vw - 320px)",
          height: "auto",
          ml: "160px"
        }}
      >
        {stackUserCards}
      </Box>
    </>
  );
}
