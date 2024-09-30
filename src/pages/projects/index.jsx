import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { Box, styled, useTheme, useMediaQuery } from "@mui/material";

import SectionWrapper from "../SectionWrapper";
import PreviewBox from "./PreviewBox";
import DetailsBox from "./DetailsBox";
import { useAsyncFetch } from "../../hooks/useAsyncFetch";
import PopupDetails from "./PopupDetails";
import PageLoading from "./PageLoading";

import config from "../../config";

const ProjectContainerStyles = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",
  marginTop: "6rem",
  "&:first-of-type": {
    marginTop: "0",
  },
  "&:last-of-type": {
    marginBottom: "0",
  },
}));

const ProjectsPage = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [projects, setProjects] = useState(null);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const { loading, error, value } = useAsyncFetch({
    url: "/projects-data.json",
    options: {
      headers: { "sec-fetch-mode": "no-cors" },
    },
  });

  const openModal = (data) => {
    return () => {
      setModalData(data);
      setOpen(true);
    };
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (loading) return;
    if (error) return;
    setProjects(value);
  }, [loading, error, value]);

  return (
    <>
      <SectionWrapper id="projects">
        {loading ? (
          <PageLoading />
        ) : (
          projects?.map((proj, index) => (
            <ProjectContainerStyles key={index} rowGap={1} p={smScreen ? 0 : 1}>
              <PreviewBox data={proj?.previews} url={proj?.demoLink?.url} />

              <DetailsBox proj={proj} openModal={openModal(proj)} />
            </ProjectContainerStyles>
          ))
        )}
      </SectionWrapper>
      <PopupDetails open={open} onClose={handleClose} data={modalData} />
    </>
  );
};

ProjectsPage.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  data: PropTypes.array,
  id: PropTypes.string,
  window: PropTypes.func,
};
export default ProjectsPage;
