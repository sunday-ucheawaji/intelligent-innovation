import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import useProfile from "../hooks/useProfile";
import DocumentUpload from "../components/DocumentUpload";
import ModalBox from "../components/Modal";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const { data, handleUploadDocument, mutation } = useProfile();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const FILE_SIZE = 5_000_000;
  const FILE_TYPE = ["application/pdf", "text/plain"];

  // Example data for the user profile
  const user = {
    name: "John Doe",
    avatar: "https://placekitten.com/150/150",
    email: "john.doe@example.com",
    location: "New York, USA",
  };

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Flex
      h="100vh"
      bg="#F5F5F5"
      w="100vw"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box paddingLeft={5} width="100%" maxW="600px">
        <Text
          cursor="pointer"
          onClick={() => handleLogout()}
          color="red.500"
          fontSize={18}
        >
          Logout
        </Text>
      </Box>
      <VStack
        h="85%"
        width="100%"
        maxW="600px"
        borderRadius="10px"
        bg="#ffffff"
        padding="20px"
      >
        <Box borderRadius="10px" bg="blue.100" w="100%" h="50%">
          <Image
            src={user.avatar}
            borderRadius="10px"
            h="100%"
            w="50%"
            mx="auto"
            objectFit="cover"
            padding="20px"
          />
        </Box>
        <Box width="100%">
          <Box
            padding="4"
            marginTop="10px"
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
          >
            <Text fontWeight="bold" display="inline">
              Name:
            </Text>
            <Text display="inline" marginLeft="2">
              {`${data?.data?.first_name} ${data?.data?.last_name}`}
            </Text>
          </Box>
          <Box
            padding="4"
            marginTop="10px"
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
          >
            <Text fontWeight="bold" display="inline">
              Email:
            </Text>
            <Text display="inline" marginLeft="2">
              {data?.data?.email}
            </Text>
          </Box>
          <Box
            padding="4"
            marginTop="10px"
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
          >
            <Text fontWeight="bold" display="inline">
              Role:
            </Text>
            <Text display="inline" marginLeft="2">
              {data?.data?.role}
            </Text>
          </Box>
          <Box
            padding="4"
            marginTop="10px"
            borderWidth="1px"
            borderRadius="lg"
            width="100%"
          >
            <Text fontWeight="bold" display="inline">
              Online:
            </Text>
            <Text display="inline" marginLeft="2">
              {data?.data?.is_online ? "Online" : "Offline"}
            </Text>
          </Box>
        </Box>
      </VStack>

      <HStack maxW="600px" width="100%">
        <Button
          onClick={onOpen}
          my="10px"
          width="50%"
          maxW="600px"
          h="50px"
          colorScheme="blue"
        >
          Upload a Document
        </Button>
        <Button
          onClick={() => navigate("/documents")}
          my="10px"
          width="50%"
          maxW="600px"
          h="50px"
          colorScheme="blue.200"
          bg="blue.200"
        >
          View Documents
        </Button>
      </HStack>

      <ModalBox isOpen={isOpen} onClose={onClose} onOpen={onOpen}>
        <DocumentUpload
          fileSize={FILE_SIZE}
          fileType={FILE_TYPE}
          onSubmit={handleUploadDocument}
        />
      </ModalBox>
    </Flex>
  );
}

export default UserProfile;
