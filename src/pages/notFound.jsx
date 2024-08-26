import React from "react";
import { Box, styled, Typography } from "@mui/material";

const SectionStyles = styled(Box)(({ theme }) => ({
  display: "grid",
  placeContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
}));

const NotFoundPage = () => {
  return (
    <SectionStyles>
      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        justifyContent="center"
        alignItems="center"
      >
        <Typography color="text.secondary" variant="h1">
          404
        </Typography>
        <Typography variant="h6">Page Not Found</Typography>
      </Box>
    </SectionStyles>
  );
};

export default NotFoundPage;
