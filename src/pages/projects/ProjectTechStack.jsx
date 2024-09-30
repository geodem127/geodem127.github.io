import React from "react";
import { Avatar, Box, styled, Tooltip } from "@mui/material";
import config from "../../config";

const ICON_SIZES = {
  sm: 18,
  md: 24,
  lg: 30,
};

const TechStackStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  flexWrap: "wrap",
  rowGap: ".5rem",
}));

const ProjectTechStack = ({ techStack = [], size = "md", ...other }) => {
  const iconSize = ICON_SIZES?.[size] || ICON_SIZES.md;

  return (
    <TechStackStyles columnGap={1.5} {...other}>
      {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}

      {techStack?.map((icon) => {
        const parsedIconName = icon?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
        return (
          <Tooltip key={parsedIconName} title={icon} placement="top" arrow>
            <Avatar
              sx={{
                width: iconSize,
                height: iconSize,
                borderRadius: 0,
              }}
              key={parsedIconName}
              alt={icon}
              // src={`${gitHubImagesPath}/${parsedIconName}.svg`}
              src={`${config.API_ENDPOINT}/media/images/${parsedIconName}.svg`}
            />
          </Tooltip>
        );
      })}
    </TechStackStyles>
  );
};

export default ProjectTechStack;
