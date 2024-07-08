import { Box, Image, Stack, Heading, Text, Link, HStack, VStack } from '@chakra-ui/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack align="stretch">
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" bg="white">
        <VStack>
          <Box>
            <Image
              src={imageSrc}
              alt='project image'
              borderRadius='lg'
            />
            <Stack p='2' height='170px' color="black">
              <Heading size='md'>{title}</Heading>
              <Text>{description}</Text>
            </Stack>
          </Box>
        </VStack>
        <Box textAlign="left">
          <Link style={{ color: "black", paddingLeft: "6px", textDecoration: "none" }}>
            See More <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Link>
        </Box>
      </Box>
    </HStack>
  );
};

export default Card;
