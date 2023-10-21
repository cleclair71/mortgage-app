import React from 'react';
import Header from './header/Header';
import Footer from '../Partials/footer/Footer';
import BannerContent from './Banner';
import { Box, VStack, Text } from "@chakra-ui/react";
import HeaderImage from '../../assets/homeH.jpg';
import { useAuth } from '../../context/AuthContext';
import { Navigate, Route, useNavigate } from 'react-router-dom';


const TestPage = () => {
 const { user } = useAuth()
 const navigate = useNavigate();
 console.log("user:", user)


        // This works
//     if (!user) {
//         return <Navigate to="/sign-in" />;
//     }

        // This doesn't work
//   if(!user) {
//     navigate("/sign-in")
//   }

    return (
        <>
            <Header />
            <Box bgImage={`url(${HeaderImage})`} bgSize="cover" bgPos="top" m="2rem" h="85vh">
            <Text fontSize='6xl'>This is a test page to check if JWT authentication is working. To make a page inaccessible to those that are logged in, import useAuth and make an if statement if (!user) followed by redirection code</Text>

            <Text fontSize='4xl'>
                {!user ? <p>FALSE User is NOT logged in!</p> : <p>TRUE WE ARE LOGGED IN!!!</p>}
            </Text>
        
                <BannerContent />
            </Box>
            <VStack pb="5">
            </VStack>
            <Footer />
        </>
    )
}

export default TestPage;