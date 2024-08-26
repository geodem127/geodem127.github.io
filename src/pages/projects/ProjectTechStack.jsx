import React from "react";
import { Avatar, Box, styled, Tooltip } from "@mui/material";

const TechStackStyles = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  // opacity: 0,
  // outline: "1px dashed yellow",
}));

const ProjectTechStack = ({ techStack = [], ...other }) => {
  // const techIconsMap = techStack?.map((tech) =>
  //   tech?.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()
  // );
  // const techIcon = `/geodem127.github.io/images/${tech}.svg`;
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
              sx={{ width: 24, height: 24 }}
              key={parsedIconName}
              alt={icon}
              src={`/geodem127.github.io/images/${parsedIconName}.svg`}
            />
          </Tooltip>
        );
      })}
    </TechStackStyles>
  );
};

export default ProjectTechStack;
