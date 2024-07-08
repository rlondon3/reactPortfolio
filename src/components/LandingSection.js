import React from "react";
import { Avatar, Heading, VStack, Box, Text } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";
const avatar = "https://i.pravatar.cc/150?img=7"

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack
      spacing={2}
    >
      <Box>
        <Avatar src={avatar} />
      </Box>
      <Box>
        <Text mb={4} fontSize='md'>{greeting}</Text>
      </Box>
      <Box>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </Box>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
