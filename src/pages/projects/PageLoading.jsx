import React from "react";
import { alpha, Box, Skeleton, styled, useTheme } from "@mui/material";

const PageLoadingStyles = styled(Box)(() => ({
  width: "100%",
  aspectRatio: "16/14",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
}));

const PageLoading = () => {
  const theme = useTheme();
  return (
    <PageLoadingStyles>
      <Box
        sx={{
          width: "90%",
          height: "70%",
          position: "relative",
          padding: "0 1rem",
          boxSizing: "border-box",
        }}
      >
        <Skeleton
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "85%",
            height: "85%",
            borderRadius: ".65rem",
            borderTopWidth: "1.85rem",
            borderLeftWidth: ".4rem",
            borderRightWidth: ".4rem",
            borderBottomWidth: ".4rem",
            borderStyle: "solid",
            borderColor: alpha(theme.palette.grey[500], 0.1),
          }}
          variant="rectangular"
        />

        <Skeleton
          sx={{
            position: "absolute",
            top: 0,
            right: "1rem",
            height: "90%",
            aspectRatio: ".6",
            zIndex: 2,
            // overflow: "hidden",
            borderRadius: ".75rem",
            borderWidth: "8px",
            borderStyle: "solid",
            borderColor: alpha(theme.palette.grey[500], 0.1),
            overflow: "visible",
            "&::after": {
              content: "''",
              position: "absolute",
              top: "10%",
              left: "100%",
              width: "4px",
              height: "10%",
              transform: "translateX(8px)",
              background: alpha(theme.palette.grey[500], 0.2),
              borderTopRightRadius: "4px",
              borderBottomRightRadius: "4px",
            },
          }}
          variant="rectangular"
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          // height: "35%",
          padding: "2rem 0",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "1rem",
          }}
        >
          <Skeleton sx={{ height: "3rem", width: "40%" }} />
          <Skeleton sx={{ height: ".3rem", width: "59%" }} />
        </Box>
        <Skeleton sx={{ height: "1.5rem", width: "100%" }} />
        <Skeleton />
        <Skeleton />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "1rem 0",
            columnGap: ".5rem",
          }}
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <Skeleton
              sx={{ height: "40px", width: "40px", borderRadius: ".25rem" }}
              variant="rectangular"
            />
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Skeleton sx={{ height: ".3rem", width: "59%" }} />
          <Skeleton
            sx={{
              height: "30px",
              width: "30px",
              marginLeft: ".5rem",
              borderRadius: ".25rem",
            }}
            variant="rectangular"
          />
          <Skeleton
            sx={{
              height: "30px",
              width: "30px",
              marginLeft: ".5rem",
              borderRadius: ".25rem",
            }}
            variant="rectangular"
          />
        </Box>
      </Box>
    </PageLoadingStyles>
  );
};

export default PageLoading;
