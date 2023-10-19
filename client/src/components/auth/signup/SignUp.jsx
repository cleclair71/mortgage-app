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
  FormErrorMessage
} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import SpringButton from '../../../theme/SpringButon';
import axios from 'axios'

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault()
    if (password === confirmPassword) {
      try {
        const response = await axios.post("http://localhost:3001/auth/api/register", {
          email, password
        })
        // navigate("/")
  
      } catch (err) {
        console.error(err.message)
      }
    }
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign up</Heading>

          <form onSubmit={onSubmit}>
            <FormControl id="email" isInvalid={email && !email.includes("@")}>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={e => setEmail(e.target.value)} />
              <FormErrorMessage>
                {email && !email.includes("@") && "Please enter a valid email."}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="password" isInvalid={password && password.length < 8}>
              <FormLabel>Password</FormLabel>
              <Input type="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
              <FormErrorMessage>
                {password && password.length < 8 && "Password should be at least 8 characters long."}
              </FormErrorMessage>
            </FormControl>

            <FormControl id="confirm-password">
              <FormLabel>Confirm Password</FormLabel>
              <Input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
            </FormControl>

            <Stack spacing={6}>
              <SpringButton type="submit">
                Sign up
              </SpringButton>
              <Text 
                color={'blue.500'} 
                onClick={() => navigate('/sign-in')} 
                cursor="pointer"
              >
                Already have an account? Sign in
              </Text>
            </Stack>
          </form>

        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Sign Up Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}