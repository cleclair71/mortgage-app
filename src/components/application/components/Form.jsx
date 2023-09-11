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
} from "@chakra-ui/react";

import PersonalInformation from "./Personal";
import CoApplicantForm from "./CoApplicant";
import IncomeForm from "./Income";
import BankingInformationForm from "./Banking";
import AssetsForm from "./Assets";
import LiabilitiesForm from "./Liabilities";
import ExistingMortgagesForm from "./ExistingMort";

function MortgageForm() {
    return (
        <Box width="80%" m="auto" mt="5">
            <Text>Please complete the form below and then click submit.</Text>
            <Text>Canadian Residents Only</Text>

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
                        <AccordionPanel pb={4}><PersonalInformation/></AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Co-Applicant</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><CoApplicantForm/></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Income</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><IncomeForm/></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Banking Information</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><BankingInformationForm/></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Assets</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><AssetsForm/></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Liabilities</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><LiabilitiesForm/></AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Existing Mortgages</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}><ExistingMortgagesForm/></AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Box>

    
    


            <Text mt="5">By submitting this application, I/we authorize Mortgage Corp. to obtain such information as it may require concerning the credit standing of the undersigned at any time and to exchange credit information with any credit bureau or credit reporting agency or any person, corporation, firm or organization with whom I/we may have or propose to have financial relations.</Text>
            <Text mt="5"> Please enter any additional comments or questions you may have:</Text>
            <Input placeholder="Comments" />

            <Button colorScheme="blue" mt="5">Submit</Button>
        </Box>
    );
}

export default MortgageForm;
