import React from "react";
import SectionWrapper from "../SectionWrapper";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import CopyAllOutlinedIcon from "@mui/icons-material/CopyAllOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { useTheme } from "@emotion/react";

const ContactInfoBoxStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  columnGap: "0.5rem",
}));

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
    <>
      {smScreen && (
        <>
          <Divider />
          <Box
            flexGrow={0}
            // mt={1}
            rowGap={2}
            py={6}
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <ContactInfoBoxStyles>
              <EmailOutlinedIcon />
              <Typography
                varient="h6"
                color="primary"
                sx={{ textTransform: "uppercase" }}
              >
                gdemonteverde127@gmail.com
              </Typography>
            </ContactInfoBoxStyles>
            <ContactInfoBoxStyles>
              <ContactPhoneOutlinedIcon />
              <Typography varient="h6">+63 992 355 3471</Typography>
            </ContactInfoBoxStyles>
          </Box>
        </>
      )}
    </>
  );
};

export default ContactsPage;
