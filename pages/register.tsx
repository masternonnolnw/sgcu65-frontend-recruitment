import { Box, Stack, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../component/UserCard";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function Register() {
  const [filter, setFilter] = useState("");

  const [allUsers, setAllUsers] = useState([
    {
      username: "",
      name: "",
      surname: ""
    }
  ]);

  const [allUsersAfterFilter, setAllUsersAfterFilter] = useState([
    {
      username: "",
      name: "",
      surname: ""
    }
  ]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    const newAllUsers = [];
    for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].username.toLowerCase().indexOf(filter) > -1) {
        newAllUsers.push(allUsers[i]);
      } else if (allUsers[i].name.toLowerCase().indexOf(filter) > -1) {
        newAllUsers.push(allUsers[i]);
      } else if (allUsers[i].surname.toLowerCase().indexOf(filter) > -1) {
        newAllUsers.push(allUsers[i]);
      }
      setAllUsersAfterFilter(newAllUsers);
    }
  }, [filter, allUsers]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        // `https://cors-anywhere.herokuapp.com/${baseURL}/users`
        `https://api.allorigins.win/raw?url=${baseURL}/users`
      );
      setAllUsers(res.data);
      setAllUsersAfterFilter(res.data);
    };
    fetchData().catch(console.error);
  }, []);

  const stackUserCards = [];
  if (allUsersAfterFilter) {
    for (var i = 0; i < allUsersAfterFilter.length; i += 4) {
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
            key={allUsersAfterFilter[i].username}
            username={allUsersAfterFilter[i].username}
            firstName={allUsersAfterFilter[i].name}
            lastName={allUsersAfterFilter[i].surname}
          />
          {i + 1 >= allUsersAfterFilter.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsersAfterFilter[i + 1].username}
              username={allUsersAfterFilter[i + 1].username}
              firstName={allUsersAfterFilter[i + 1].name}
              lastName={allUsersAfterFilter[i + 1].surname}
            />
          )}

          {i + 2 >= allUsersAfterFilter.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsersAfterFilter[i + 2].username}
              username={allUsersAfterFilter[i + 2].username}
              firstName={allUsersAfterFilter[i + 2].name}
              lastName={allUsersAfterFilter[i + 2].surname}
            />
          )}

          {i + 3 >= allUsersAfterFilter.length ? (
            <Box
              sx={{
                width: "249px",
                height: "95px"
              }}
            />
          ) : (
            <UserCard
              key={allUsersAfterFilter[i + 3].username}
              username={allUsersAfterFilter[i + 3].username}
              firstName={allUsersAfterFilter[i + 3].name}
              lastName={allUsersAfterFilter[i + 3].surname}
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
            onChange={handleSearch}
            value={filter}
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
