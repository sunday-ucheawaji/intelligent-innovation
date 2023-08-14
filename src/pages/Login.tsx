import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Heading,
  Link,
  Box,
  Text,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import useLogin from "../hooks/useLogin";
import { validateEmail } from "../utils";

const Login = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    onError,
    handleClick,
    errors,
    show,
    mutation,
  } = useLogin();
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
        borderRadius="10px"
      >
        <Heading mb={4}>Login</Heading>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            {...register("email", {
              required: {
                value: true,
                message: "Email is required",
              },
              validate: (fieldValue) => {
                return (
                  validateEmail(fieldValue) || "Enter a valid email address"
                );
              },
            })}
            type="email"
            placeholder="Enter your email"
          />
          {errors.email?.message && (
            <Text color="red.500">{errors.email?.message}</Text>
          )}
        </FormControl>

        <FormControl mt={4} isRequired>
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is required",
                },
              })}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>

          {errors.password?.message && (
            <Text color="red.500">{errors.password?.message}</Text>
          )}
        </FormControl>

        <Button
          onClick={handleSubmit(onSubmit, onError)}
          colorScheme="blue"
          h="40px"
          mt={6}
          width="full"
        >
          {mutation.isLoading ? "Submitting" : "Login"}
        </Button>

        <Link mt={4} textAlign="center">
          Don't have an account? <Link href="/register">Register</Link>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
