import {
  Box,
  Grid,
  Skeleton,
  Stack,
  TextField,
  Typography
} from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../component/NavBar";
import UserCard from "../component/UserCard";
const baseURL = process.env.NEXT_PUBLIC_API_URL;

export default function Register2() {
  const [loading, setLoading] = useState(true);

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
      const res = await axios.get(`${baseURL}/users`);
      setAllUsers(res.data);
      setAllUsersAfterFilter(res.data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, []);

  const stackUserCards = [];
  if (allUsersAfterFilter) {
    for (var i = 0; i < allUsersAfterFilter.length; i++) {
      stackUserCards.push(
        <Grid item xs={12} lg={3}>
          <UserCard
            key={allUsersAfterFilter[i].username}
            username={allUsersAfterFilter[i].username}
            firstName={allUsersAfterFilter[i].name}
            lastName={allUsersAfterFilter[i].surname}
          />
        </Grid>
      );
    }
  }
  if (loading) {
    const skeletonBoxs = [];
    for (let i = 0; i < 16; i++) {
      skeletonBoxs.push(
        <Grid item xs={12} lg={3}>
          <Skeleton
            variant="rectangular"
            width="90%"
            height="105px"
            sx={{
              ml: "auto",
              mr: "auto"
            }}
          />
        </Grid>
      );
    }
    return (
      <>
        <NavBar />
        <Grid
          container
          spacing={2}
          sx={{
            width: "86vw",
            ml: "7vw",
            // ml: "160px",
            alignContent: "center",
            mt: "80px",
            mb: "30px"
          }}
        >
          <Grid item xs={12} lg={9} sx={{ padding: "20px" }}>
            <Typography
              sx={{
                width: { xs: "90%", lg: "380px" },
                height: { xs: "34px", lg: "73px" },
                ml: { xs: "auto", lg: "14px" },
                mr: "auto",

                fontFamily: "Prompt",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: { xs: "34px", lg: "47px" },
                lineHeight: { xs: "50px", lg: "73px" }
                // ml: "160px"
              }}
            >
              รายชื่อผู้ลงทะเบียน
            </Typography>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box
              sx={{
                mt: { xs: "0px", lg: "25px" },
                width: { xs: "90%", lg: "260px" },
                height: "30px",
                borderRadius: "5px",
                backgroundColor: "white",
                ml: "auto",
                mr: "auto"
              }}
            >
              <Skeleton
                variant="rectangular"
                sx={{ width: { xs: "100%", lg: "260px" } }}
                height={32}
              />
            </Box>
          </Grid>
          {skeletonBoxs}
        </Grid>
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Grid
        container
        spacing={2}
        sx={{
          width: "86vw",
          ml: "7vw",
          // ml: "160px",
          alignContent: "center",
          mt: "80px",
          mb: "30px"
        }}
      >
        <Grid item xs={12} lg={9} sx={{ padding: "20px" }}>
          <Typography
            sx={{
              width: { xs: "90%", lg: "380px" },
              height: { xs: "34px", lg: "73px" },
              ml: { xs: "auto", lg: "14px" },
              mr: "auto",

              fontFamily: "Prompt",
              fontStyle: "normal",
              fontWeight: 500,
              fontSize: { xs: "34px", lg: "47px" },
              lineHeight: { xs: "50px", lg: "73px" }
              // ml: "160px"
            }}
          >
            รายชื่อผู้ลงทะเบียน
          </Typography>
        </Grid>
        <Grid item xs={12} lg={3}>
          <Box
            sx={{
              mt: { xs: "0px", lg: "25px" },
              width: { xs: "90%", lg: "260px" },
              height: "30px",
              borderRadius: "5px",
              backgroundColor: "white",
              ml: "auto",
              mr: "auto"
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
              sx={{
                width: { xs: "100%", lg: "260px" }
              }}
            />
          </Box>
        </Grid>
        {stackUserCards}
      </Grid>
    </>
  );
}
