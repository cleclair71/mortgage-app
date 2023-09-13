import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Heading
} from "@chakra-ui/react";

const Renewing = () => {
    return (
        <Box p={4} flexDirection="column">

            <Accordion defaultIndex={[0, 1, 2, 3]} allowMultiple>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Unlocking the Potential of Mortgage Renewal</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={3}>
                            Is the term of your mortgage coming to an end? Now is the opportune time to start considering renewing for another term and exploring the range of options available to you. At Main Mortgage, Dora is dedicated to finding a mortgage solution that perfectly fits your budget and financial needs.
                        </Text>
                        <Text mb={3}>
                            Are you looking to tap into your home's equity to finance a substantial purchase or consolidate debt? Let us alleviate the financial stress by working diligently to find a tailored solution that meets your specific requirements.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">But can you trust the banks?</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={3}>
                            It's a well-known fact that banks often send out mortgage renewals at significantly higher rates than their best available options. These renewals are frequently offered at posted rates, which can be approximately 2% higher than the best discounted rates for a 5-year term. Unfortunately, this approach doesn't necessarily serve the best interests of their clients, as banks rely on the likelihood that most will blindly accept and sign the renewal without questioning.
                        </Text>
                        <Text mb={3}>
                            Shockingly, statistics show that approximately 70-80% of individuals simply sign and return the renewal, unknowingly forfeiting potential savings amounting to thousands of dollars in interest. Allow Dora to handle the shopping for you, leveraging our extensive network of competing banks, credit unions, and lenders to secure the best deal available in the industry. Our rates are consistently competitive and often surpass those offered by traditional banks.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Building a Strategy</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={3}>
                            At Main Mortgage, we go beyond simply providing mortgage solutions. We believe in helping you build a strategy to work towards your ultimate goal of being mortgage-free. Unlike many lenders and banks, we understand the importance of tailoring payments, pre-payment privileges, and other strategies to expedite the path to mortgage freedom.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Tips and Tricks</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={3}>
                            To ensure you secure the best possible deal, it is advisable to review your mortgage approximately 4-6 months prior to its expiry. Take a moment to retrieve your mortgage statement and identify the expiration date, flagging it for attention 6 months in advance. Rest assured, we can hold a rate for 120 days and monitor rates during that period. If rates decrease, you will always benefit from our best rates.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default Renewing;