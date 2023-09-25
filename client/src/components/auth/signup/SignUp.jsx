import React, { useState } from "react";
import * as Yup from 'yup';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import SpringButton from "../../../theme/SpringButon";

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  confirmPassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
     .required('Confirm Password is required'),
});

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const values = { email, password, confirmPassword };
      await validationSchema.validate(values);
      
      // TODO: Add server-side authentication logic
      navigate("/application-page");  // Simulate successful sign-up
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>Sign up</Heading>
            <FormControl id="email" isInvalid={!!error}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <FormControl id="password" isInvalid={!!error}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            autoComplete="off"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
        <FormControl id="confirm-password" isInvalid={!!error}>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            type="password"
            autoComplete="off"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
            <Stack spacing={6}>
              <SpringButton type="submit">
                Sign up
              </SpringButton>
              <Text
                color={"blue.500"}
                onClick={() => navigate("/sign-in")}
                cursor="pointer"
              >
                Already have an account? Sign in
              </Text>
            </Stack>
          </Stack>
        </form>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Sign Up Image"}
          objectFit={"cover"}
          src={
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
          }
        />
      </Flex>
    </Stack>
  );
}