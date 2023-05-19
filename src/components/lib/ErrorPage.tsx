import React from "react";
import { Center, Flex, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Center alignItems="center">
      <Flex>
        <Text fontFamily="cursive" fontSize="25px" fontWeight="bold">
          404 Page not found
        </Text>
      </Flex>
    </Center>
  );
};

export default ErrorPage;
