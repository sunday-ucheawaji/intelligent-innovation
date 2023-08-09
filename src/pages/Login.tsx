import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Link,
  Box,
} from "@chakra-ui/react";

const Login = () => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        p={8}
        maxW="400px"
        mx="auto"
        bg="#ffffff"
        w="100%"
        h="50%"
        borderRadius="10px"
      >
        <Heading mb={4}>Login</Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>
        <Button colorScheme="blue" mt={6} width="full">
          Login
        </Button>
        <Link mt={4} textAlign="center">
          Don't have an account? <Link href="/register">Register</Link>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
