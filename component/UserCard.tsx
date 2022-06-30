import { Box, Typography } from "@mui/material";

interface UserCardProps {
  username: string;
  firstName: string;
  lastName: string;
}
export default function UserCard(props: UserCardProps) {
  return (
    <Box
      sx={{
        width: "90%",
        height: "105px",
        backgroundColor: "white",
        border: "1px solid #DE5C8E",
        borderRadius: "8px",
        padding: "15px",
        transition: "0.2s",
        overflowX: "hidden",
        ml: "auto",
        mr: "auto",
        "&:hover": {
          backgroundColor: "#fcedf3",
          width: "100%"
        }
      }}
    >
      <Typography
        sx={{
          width: "100%",
          height: "36px",

          fontFamily: "Prompt",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "22px",
          lineHeight: "36px",
          transition: "0.2s",

          color: "#DE5C8E"
          // "&:hover": {
          //   fontSize: "18px"
          // }
        }}
      >
        {props.username}
      </Typography>
      <Typography
        sx={{
          width: "100%",
          height: "24px",

          fontFamily: "Prompt",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "15px",
          lineHeight: "24px",

          color: "#000000",
          transition: "0.2s"
          // "&:hover": {
          //   fontSize: "15px"
          // }
        }}
      >
        {props.firstName} {props.lastName}
      </Typography>
    </Box>
  );
}
