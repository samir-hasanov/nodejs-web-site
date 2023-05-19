import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

const BlogCards = () => {
  return (
    <Card
      mt={15}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      _hover={{ boxShadow: "5px 5px 5px 5px #333" }}
    >
      <Image
        objectFit="cover"
        width={200}
        height={200}
        // maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack ml={10}>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2" fontFamily="cursive">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="outline" colorScheme="blue">
            Buy Latte
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default BlogCards;
