import React from "react";
import { Flex, Link, Stack, VStack, StackDivider } from "@chakra-ui/react";
import BlogCards from "../components/Card/BlogCards";
import PageContgainer from "../components/lib/PageContgainer";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const navs: {
  text: string;
  url: string;
}[] = [
  {
    text: "Web Development",
    url: "",
  },
  {
    text: "Mobile Apps",
    url: "",
  },
  {
    text: "Data Analysis",
    url: "",
  },
  {
    text: "Programming",
    url: "",
  },
];

const Home = () => {
  return (
    <PageContgainer>
      <Flex justifyContent="space-between">
        <Flex mt={15} boxShadow="1px 1px 1px 1px #333">
          <VStack width={200} spacing={4} align="stretch" padding="20px">
            {navs.map((nav, idx) => (
              <Link
                key={idx}
                as={NavLink}
                to={nav.url}
                textDecoration="none"
                fontWeight="blod"
                fontSize="20px"
                _hover={{ color: "blue" }}
              >
                {nav.text}
              </Link>
            ))}
          </VStack>
        </Flex>
        <BlogCards />
      </Flex>
    </PageContgainer>
  );
};

export default Home;
