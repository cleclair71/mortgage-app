import {
    Box,
    Button,
    Text,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Heading,
    Input,
    Divider,
    VStack,
    Link,
    useColorModeValue

} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from 'react-router-dom';
import SpringButton from "../../../components/Partials/Button";


import PersonalInformation from "./Personal";
import CoApplicantForm from "./CoApplicant";
import IncomeForm from "./Income";
import BankingInformationForm from "./Banking";
import AssetsForm from "./Assets";
import LiabilitiesForm from "./Liabilities";
import ExistingMortgagesForm from "./ExistingMort";

function MortgageForm() {
    const color = useColorModeValue("green.500", "green.200");
    return (
        <Box width="80%" m="auto" mt="5">
            <VStack spacing={8} align="start">
                <Heading as="h1" size="2xl" mt="40px" fontSize="2.5rem" color={color} textDecoration="none" opacity="0.6" _hover={{ opacity: "1" }}>
                    Let's get you started on your application
                </Heading>
                <Divider w="15%" borderColor={color} mt="30px" mb="30px" />
                <Text fontSize="xl" fontWeight="bold">
                    Let's get you started on your application
                </Text>
                <Text>
                    At Our company, it is our goal to provide you, our client, with the quickest, easiest, and most hassle free way of getting a low rate Canada mortgage loan, 24/7.
                    To that end, we have developed five simple steps to make the mortgage application process easier.
                </Text>
                <ol>
                    <li>Complete the secure, no cost, online mortgage application.</li>
                    <li>Click submit, and if you requested the instant mortgage approval option (restrictions apply), you'll get an answer in seconds.</li>
                    <li>Within 24 hours, Dora will be in contact with you to discuss various mortgage options including mortgage rates and terms.</li>
                    <li>You review and sign the necessary documentation with a legal professional conveniently located in your area.</li>
                    <li>Your mortgage is funded.</li>
                </ol>

                <Text>If you prefer, you can print our mortgage application to fax or email it to our toll free fax number provided on the application. (Note: Faxed applications do not qualify for instant mortgage or pre approvals.)</Text>
                <SpringButton variant="outline">Download Application</SpringButton>
                <Text>Please complete the form below and then click submit.</Text>
                <Text>Canadian Residents Only</Text>
            </VStack>

            {/* <Box
                flex="1"
                position="sticky"
                top="0"
                maxHeight="90vh"
                minWidth="200px"
                overflowY="auto"
                ml={[5, 2]}
                mt={[10, 5]}
                p={5}
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
            >
                <Heading size="md" mb={3}>Resources</Heading>
                <VStack align="start" spacing={2}>
                    <Box
                        p={3}
                        bg="white"
                        width="100%"
                        borderRadius="md"
                        boxShadow="sm"
                    >
                        <Link as={RouterLink} to="/glossary-page">Glossary</Link>
                    </Box>
                    <Box
                        p={3}
                        bg="white"
                        width="100%"
                        borderRadius="md"
                        boxShadow="sm"
                    >
                        <Link as={RouterLink} to="/faq-page">Frequently Asked Questions</Link>
                    </Box>
                </VStack>


            </Box> */}
            <Box
                flex="1"
                position="relative"
                margin="auto"
                minWidth="100%"
                p={5}
                bg="gray.100"
                borderRadius="md"
                boxShadow="md"
                display="flex"
                justifyContent="space-between"
                marginTop="5"
            >
                <Accordion minWidth="100%" defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Personal Information</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><PersonalInformation /></AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Co-Applicant</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><CoApplicantForm /></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Income</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><IncomeForm /></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Banking Information</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><BankingInformationForm /></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Assets</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><AssetsForm /></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Liabilities</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><LiabilitiesForm /></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Existing Mortgages</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><ExistingMortgagesForm /></AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>





            <Text mt="5">By submitting this application, I/we authorize Mortgage Corp. to obtain such information as it may require concerning the credit standing of the undersigned at any time and to exchange credit information with any credit bureau or credit reporting agency or any person, corporation, firm or organization with whom I/we may have or propose to have financial relations.</Text>
            <Text mt="5"> Please enter any additional comments or questions you may have:</Text>
            <Input placeholder="Comments" />

            <SpringButton colorScheme="blue" mt="5">Submit</SpringButton>
        </Box>
    );
}

export default MortgageForm;
