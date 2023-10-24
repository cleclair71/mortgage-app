'use client'
import { FiMapPin, FiPhone } from 'react-icons/fi';
import { MdFax } from 'react-icons/md';
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast
} from '@chakra-ui/react'
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md'
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs'
import SpringButton from '../../../theme/SpringButon';
import { useState } from 'react';
import axios from 'axios';


export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const toast = useToast();

  const onSubmit = async(e) => {
    e.preventDefault()
   
    if (name === "" | email === "" | message === "") {
      toast({
        title: "Empty Fields!",
        description: "Please fill out all fields.",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });

      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/send-mail`, {
        name, email, message
    })

    setName("")
    setEmail("")
    setMessage("")

    toast({
      title: "Success!",
      description: "Thank you for your message. We'll get back to you as soon as possible",
      status: "success",
      toastPosition: "top",
      duration: 5000,
      isClosable: true,
    });

    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <Flex>
      <Box
        bg="
          #e0e5df"
        color="white"
        borderRadius="lg"
        m={{ sm: 2, md: 8, lg: 10 }}
        p={{ sm: 5, md: 5, lg: 16 }}>
        <Box p={4}>
          <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
            <WrapItem>
              <Box>
                <Heading color="#555742" >Contact</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color="#555742">
                  Fill up the form below to contact
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                  <VStack pl={0} spacing={3} alignItems="flex-start">
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdPhone color="#50703e" size="20px" />}>
                      +91-988888888
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdEmail color="#50703e" size="20px" />}>
                      hello@abc.com
                    </Button>
                    <Button
                      size="md"
                      height="48px"
                      width="200px"
                      variant="ghost"
                      color="#555742"
                      _hover={{ border: '2px solid #50703e' }}
                      leftIcon={<MdLocationOn color="#50703e" size="20px" />}>
                      Karnavati, India
                    </Button>
                  </VStack>
                </Box>
                <HStack
                  mt={{ lg: 10, md: 10 }}
                  spacing={5}
                  px={5}
                  alignItems="flex-start">
                  <IconButton
                    color="white"
                    aria-label="facebook"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<MdFacebook size="28px" />}
                  />
                  <IconButton
                    color="white"
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<BsGithub size="28px" />}
                  />
                  <IconButton
                    color="white"
                    aria-label="discord"
                    variant="ghost"
                    size="lg"
                    isRound={true}
                    _hover={{ bg: '#50703e' }}
                    icon={<BsDiscord size="28px" />}
                  />
                </HStack>
              </Box>
            </WrapItem>
            <WrapItem>
              <Box bg="white" borderRadius="lg">
                <Box m={8} color="#0B0E3F">
                  <VStack spacing={5}>

                  <form onSubmit={onSubmit}>
                    <FormControl id="name">
                      <FormLabel>Your Name</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <BsPerson color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" value={name} onChange={e => setName(e.target.value)}/>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="email">
                      <FormLabel>Mail</FormLabel>
                      <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement pointerEvents="none">
                          <MdOutlineEmail color="gray.800" />
                        </InputLeftElement>
                        <Input type="text" size="md" value={email} onChange={e => setEmail(e.target.value)} />
                      </InputGroup>
                    </FormControl>
                    <FormControl id="message">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        borderColor="gray.300"
                        _hover={{
                          borderRadius: 'gray.300',
                        }}
                        placeholder="message"
                        value={message} onChange={e => setMessage(e.target.value)}
                      />
                    </FormControl>
                    <FormControl id="name" float="right">
                      <SpringButton type="submit" variant="solid" bg="#50703e" color="white" _hover={{}}>
                        Send Message
                      </SpringButton>
                    </FormControl>
                  </form>

                  </VStack>
                </Box>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>

  )
}
