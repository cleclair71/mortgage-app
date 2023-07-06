import { 
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Heading,
    List,
    ListItem
} from "@chakra-ui/react";

const HomePurchase = () => {
    return (
        <Box p={4}>
            <Heading mb={4}>Home Purchasing Guide</Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">First-time Home Buyers</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Accordion allowToggle>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        <Text>Understanding the First-time Home Buyer Incentive</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text mb={2}>
                                    The First-Time Home Buyer Incentive is a program that eases the process of purchasing a home by offering an additional 5% or 10% towards your down payment, courtesy of the Government. This program employs a shared equity mechanism, which implies that when repaying the Government, either 5% or 10% of the property's market value at the time of repayment is expected. The maximum repayment amount would be:
                                    </Text>
                                    <List styleType="disc" pl={5} mb={2}>
                                        <ListItem>In case of appreciation, the Incentive amount plus a maximum gain to the Government of 8% per annum (not compounded) on the Incentive amount from the date of advance to the time of repayment.</ListItem>
                                        <ListItem>In case of depreciation, the Incentive amount minus a maximum loss to the Government of 8% per annum (not compounded) on the Incentive amount from the date of advance to the time of repayment.</ListItem>
                                    </List>
                                    <Text mb={2}>
                                    This incentive is specifically for first-time homebuyers. You're considered a first-time homebuyer if you satisfy any of the following conditions:
                                    </Text>
                                    <List styleType="disc" pl={5}>
                                        <ListItem>You've never owned a home before.</ListItem>
                                        <ListItem>In the past four years, neither you nor your current spouse or common-law partner owned a home that you occupied.</ListItem>
                                        <ListItem>You've recently gone through the dissolution of a marriage or common-law partnership (even if you don’t meet the other first-time home buyer requirements).</ListItem>
                                    </List>
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <AccordionButton>
                                    <Box flex="1" textAlign="left">
                                        <Text>Eligibility Criteria</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                                <AccordionPanel pb={4}>
                                    <Text mb={2}>The First-Time Home Buyer Incentive has certain eligibility criteria that need to be satisfied:</Text>
                                    <List styleType="disc" pl={5} mb={2}>
                                        <ListItem>Your total annual qualifying income doesn’t exceed $120,000 ($150,000 if the home you are purchasing is in Toronto, Vancouver, or Victoria).</ListItem>
                                        <ListItem>Your total borrowing is no more than 4 times your qualifying income (4.5 times if the home you are purchasing```jsx
is in Toronto, Vancouver or Victoria).</ListItem>
                                        <ListItem>You or your partner are a first-time homebuyer.</ListItem>
                                        <ListItem>You are a Canadian citizen, permanent resident, or non-permanent resident authorized to work in Canada.</ListItem>
                                        <ListItem>You meet the minimum down payment requirements with traditional funds.</ListItem>
                                    </List>
                                    <Text mb={2}>
                                    The Incentive is akin to a second mortgage on your home. Your first mortgage must constitute more than 80% of the property's value and be eligible through Canada Guaranty, CMHC, or Sagen. The insurance premium is based on the loan-to-value ratio of the first mortgage only. 
                                    </Text>
                                    <Heading size="sm" mb={2} mt={4}>Important Considerations</Heading>
                                    <Text>
                                    The Incentive may come with additional costs such as higher legal fees, appraisal fees, other fees related to the incentive, and increased property insurance premiums. It's essential to consider these before making a decision.
                                    </Text>
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default HomePurchase;