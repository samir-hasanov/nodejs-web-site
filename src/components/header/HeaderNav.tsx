import React from "react";
import { Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import PageContgainer from "../lib/PageContgainer";
const navs: {
  text: string;
  url: string;
}[] = [
  {
    text: "HOME",
    url: "/home",
  },
  {
    text: "BLOGLIST",
    url: "/blogs",
  },
];
const HeaderNav = () => {
  return (
    <Flex height={50} bg="skyblue" alignItems="center">
      <PageContgainer>
        <Flex width="max">
          <Flex columnGap="10px">
            {navs.map((nav, idx) => (
              <Link
                key={idx}
                as={NavLink}
                to={nav.url}
                textDecoration="none"
                style={{ color: "white" }}
                fontWeight="bold"
                fontSize="20px"
              >
                {nav.text}
              </Link>
            ))}
          </Flex>
        </Flex>
      </PageContgainer>
    </Flex>
  );
};

export default HeaderNav;
