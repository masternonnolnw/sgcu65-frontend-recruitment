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
        width: "249px",
        height: "95px",
        backgroundColor: "white",
        border: "1px solid #DE5C8E",
        borderRadius: "8px",
        padding: "15px",
        transition: "0.2s",
        overflowX: "hidden",
        "&:hover": {
          backgroundColor: "#fcedf3",
          width: "350px"
        }
      }}
    >
      <Typography
        sx={{
          width: "213px",
          height: "36px",

          fontFamily: "Prompt",
          fontStyle: "normal",
          fontWeight: 500,
          fontSize: "23px",
          lineHeight: "36px",

          color: "#DE5C8E"
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
          fontSize: "16px",
          lineHeight: "24px",

          color: "#000000"
        }}
      >
        {props.firstName} {props.lastName}
      </Typography>
    </Box>
  );
}
