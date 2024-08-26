import { useContext, useState } from "react";
import PropTypes from "prop-types";

import {
  Box,
  styled,
  useTheme,
  useMediaQuery,
  Divider,
  Modal,
  Typography,
} from "@mui/material";

import SectionWrapper from "../SectionWrapper";
import { UserContext } from "../../context/userContext";
import PreviewBox from "./PreviewBox";
import DetailsBox from "./DetailsBox";
import ModalWindow from "./ModalWindow";

const ProjectContainerStyles = styled(Box)(({ theme }) => ({
  // outline: "1px dashed red",
  // outlineOffset: "-3px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "stretch",
  position: "relative",
  marginTop: "6rem",
  // marginBottom: "6rem",
  // height: "100%",
  "&:first-of-type": {
    marginTop: "0",
  },
  "&:last-of-type": {
    marginBottom: "0",
  },
}));

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const ProjectsPage = () => {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down("md"));
  // const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const { projects } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const openModal = (data) => {
    return () => {
      setModalData(data);
      setOpen(true);
    };
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <SectionWrapper id="projects" sx={{ paddingBottom: "6rem" }}>
        {projects?.map((proj, index) => (
          <>
            <ProjectContainerStyles
              key={proj?.id}
              rowGap={1}
              p={smScreen ? 0 : 1}
            >
              <PreviewBox data={proj?.previews} url={proj?.demoLink?.url} />

              <DetailsBox proj={proj} openModal={openModal(proj)} />
            </ProjectContainerStyles>
            {/* {index < projects.length - 1 && <Divider width="50%"  />} */}
          </>
        ))}
      </SectionWrapper>
      <ModalWindow open={open} onClose={handleClose} data={modalData} />
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
