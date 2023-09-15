import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Heading,
    UnorderedList,
    ListItem
} from "@chakra-ui/react";

const Building = () => {

    return (
        <Box p={4} flexDirection="column">
            <Heading size="md" mb={6} mx="2em">Building Your Home / Construction Financing</Heading>
            <Text mb={6} mx="3em">
                Building a home can be a great way to get the house you want and if you are able to do some of the work yourself it's a great way to build equity by saving on labour costs.
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
                justifyContent="space-between"
            >

                <Accordion minWidth="100%" defaultIndex={[0]} allowMultiple>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Construction Mortgages</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Construction mortgages allow you to obtain draws during the construction in order to pay your contractors and keep the project moving along. There is a quite a bit more planning and paperwork needed than in a regular purchase or in the case of a purchase from a builder. In addition to standard income and down payment documents we will also require a copy of the deed or offer to purchase for the lot, copies of plans or blueprints, a detailed summary of your construction costs ( often supported by quotes from contractors) as well as your building permit, and a copy of your builders risk insurance policy. Once the plans and estimates are received an appraisal to determine the final value will be required. If you already own the land it is considered part of your equity and we can access typically 50% of the value of this for start up costs. You will  also require some additional savings, or access to funds, to get you to the first draw stage.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Builder/Contractor vs. Self-Build</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                If you are purchasing a home directly from a builder or contractor then you won't require a construction mortgage as the funds are not required until the house is complete. If you buy the land yourself and then hire a general contractor or plan to contract out the build yourself this will be considered a self-build.  In this case you will require multiple draws to complete the build.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Understanding Your Options</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                There are many different options for this type of financing and it's important to understand the process and the options.

                                Have some peace of mind knowing your agent will be there every step of the way to help finance your new build or help with construction financing on your new home. Outlining draws of funds to help pay your contractor or builder, helping to arrange inspections and appraisals and making cash flow available each step of the way, is what Dora is here to do.

                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <Heading size="md" mb={6} mx="2em">Our Services</Heading>
                    <UnorderedList mb={6} mx="3em">
                        <ListItem>Building from scratch on your own vacant land</ListItem>
                        <ListItem>Completion mortgages</ListItem>
                        <ListItem>Draw/Progress- draw mortgages</ListItem>
                    </UnorderedList>
                </Accordion >
            </Box >
        </Box>
    );
}

export default Building;