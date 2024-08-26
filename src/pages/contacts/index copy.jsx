import React from "react";
import SectionWrapper from "../SectionWrapper";
import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  useMediaQuery,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { useTheme } from "@emotion/react";

const AvatarStyles = styled(Avatar)(({ theme }) => ({
  background: "transparent",
  color: theme.palette.primary.contrastText,
}));
const ContactsPage = () => {
  const theme = useTheme();

  const smScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleCopy = async (text) => {
    // const el = document.createElement("textarea");
    // el.value = text;
    // document.body.appendChild(el);
    // el.select();
    // document.execCommand("copy");
    // document.body.removeChild(el);
    navigator.clipboard
      .writeText(text)
      .then(function () {
        alert("Text copied: " + text);
      })
      .catch(function (error) {
        console.error("Failed to copy text: ", error);
      });
  };
  return (
    <SectionWrapper id="contacts">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: smScreen ? "flex-start" : "center",

          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: smScreen ? "flex-start" : "center",
          }}
        >
          <List
            dense={true}
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            <ListItem
              sx={{
                padding: 0,
                marginLeft: 0,
                marginRight: "3rem",
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="copy"
                  onClick={() => handleCopy("gdemonteverde127@gmail.com")}
                >
                  <CopyAllOutlinedIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <AvatarStyles>
                  <EmailOutlinedIcon />
                </AvatarStyles>
              </ListItemAvatar>
              <ListItemText primary="gdemonteverde127@gmail.com" />
            </ListItem>
            <ListItem
              sx={{
                padding: 0,
                marginLeft: 0,
                marginRight: "3rem",
              }}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="copy"
                  color="text.primary"
                  onClick={() => handleCopy("+63 992 355 3471")}
                >
                  <CopyAllOutlinedIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <AvatarStyles>
                  <ContactPhoneOutlinedIcon />
                </AvatarStyles>
              </ListItemAvatar>
              <ListItemText primary="+63 992 355 3471" />
            </ListItem>
          </List>
        </Box>
      </Box>
    </SectionWrapper>
  );
};

export default ContactsPage;
