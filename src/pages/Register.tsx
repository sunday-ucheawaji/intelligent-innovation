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

import useRegister from "../hooks/useRegister";
import { validateEmail } from "../utils";

const Register = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    onError,
    handleClick,
    errors,
    show,
    mutation,
  } = useRegister();
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
        <Heading mb={4}>Register</Heading>
        <FormControl isRequired>
          <FormLabel>First Name</FormLabel>
          <Input
            {...register("first_name", {
              required: {
                value: true,
                message: "First Name is required",
              },
            })}
            type="text"
            placeholder="Enter your first name"
          />
          {errors.first_name?.message && (
            <Text color="red.500">{errors.first_name?.message}</Text>
          )}
        </FormControl>
        <FormControl mt={4} isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            {...register("last_name", {
              required: {
                value: true,
                message: "Last Name is required",
              },
            })}
            type="text"
            placeholder="Enter your last name"
          />
          {errors.last_name?.message && (
            <Text color="red.500">{errors.last_name?.message}</Text>
          )}
        </FormControl>

        <FormControl mt={4} isRequired>
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
          {mutation.isLoading ? "Submitting" : "Register"}
        </Button>

        <Link mt={4} textAlign="center">
          Already have an account? <Link href="/login">Login</Link>
        </Link>
      </Flex>
    </Box>
  );
};

export default Register;
