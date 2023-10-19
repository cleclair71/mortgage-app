'use client'

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
  useToast
} from '@chakra-ui/react'

import { useNavigate } from "react-router-dom";
import SpringButton from '../../../theme/SpringButon';
import { useState } from 'react';
import axios from 'axios'

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const onSubmit = async (e) => {

    e.preventDefault()
      try {
        const response = await axios.post("http://localhost:3001/auth/api/login", {
          email, password
        })
        console.log(response)
        // navigate("/")
      } catch (err) {
        console.error(err.response.data)
        toast({
          title: "Email or password not found",
          description: err.response.data,
          status: "error",
          duration: 5000,
          isClosable: true,
      });
      }
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>

        <form onSubmit={onSubmit}> 
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={e => setEmail(e.target.value)}/>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)}/>
          </FormControl>

          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <SpringButton variant='solid' type="submit">
              Sign in
            </SpringButton>
            <Text 
              color={'blue.500'} 
              onClick={() => navigate('/sign-up')} 
              cursor="pointer"
            >Don't have an account? Sign up</Text>
          </Stack>
        </form>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}