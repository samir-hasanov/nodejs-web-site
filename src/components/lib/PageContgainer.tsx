import React from "react";
import { Box } from "@chakra-ui/react";

interface IProps {
  children: React.ReactElement;
}

const PageContgainer: React.FC<IProps> = ({ children }) => {
  return (
    <Box width="70%" mx="auto">
      {children}
    </Box>
  );
};

export default PageContgainer;
