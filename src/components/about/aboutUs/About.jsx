import {
    Box,
  
    Heading,
    
    Text
} from "@chakra-ui/react";


const color = "blue.500";
const bgColors = ["red.50", "green.50", "blue.50"];





const AboutUs = () => (
    <Box p={4}>
        <Heading size="md" mb={6} mx="2em">Navigating the Mortgage Process in Canada</Heading>
        <Text mb={6} mx="3em">
            When it comes to purchasing a new property or refinancing your mortgage in Canada, the abundance of information can feel overwhelming. Before engaging the services of a real estate agent, it is crucial to have your mortgage arrangements in order. This ensures that both you and the agent can make the most efficient use of your time.
        </Text>
        <Text mb={6} mx="3em">
            To streamline the process, there are five key categories of documents that you need to gather: identification, proof of income, basic financial information, down payment confirmation, and property details. In the event that someone intends to cosign your mortgage, they will also be required to provide their identification and financial information. This article aims to simplify the documentation process by providing a comprehensive understanding of each required document.
        </Text>
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
>
            
        </Box>
    </Box>
);


export default AboutUs;