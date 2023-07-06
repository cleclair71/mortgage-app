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
    ListItem,
    Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpringButton from '../../../theme/SpringButon';

const HomePurchase = () => {
    return (
        <Box p={4}>
            <Heading mb={4}>Home Purchasing Guide</Heading>
            <Accordion allowToggle>
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
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
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Purchasing Your Primary Home</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={2}>
                            Finding a place to call home can be exciting and challenging, we enjoy helping you find that sense of pride and stability of homeownership.
                            By definition “A person's primary residence, or main residence is the dwelling where they usually live, typically a house or an apartment. ... A primary residence is considered to be a legal residence for the purpose of income tax and/or acquiring a mortgage.”
                            In order for your new home to qualify as your primary residence, you must answer yes to the following questions:
                        </Text>
                        <ol>
                            <li>Are you going to be living in this home for a majority of the calendar year?</li>
                            <li>Are you employed in the same city/town or area as the property? (or within reasonable driving distance)</li>
                        </ol>
                        <SpringButton as={Link} to="/doc-page" variant="outline">
                            Documentations
                        </SpringButton>
                        <Text mb={2}>
                            If you are in the market for your first home, your second or tenth home, give us a call today, I’m here to help find solutions that work for your needs, wants and lifestyle.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>

                {/* New Section: Buying a Rental Property */}
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Buying a Rental Property</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={2}>
                            Buying a rental property can be a great investment tool and help to diversify your portfolio. A down payment of 20% is required for those with good credit. If your credit is a little bruised, the down payment will be slightly higher. The interest on the loan is tax deductible.
                        </Text>
                    </AccordionPanel>
                </AccordionItem>
                  {/* New Section: Cottage */}
                <AccordionItem>
                    <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                        <Box flex="1" textAlign="left">
                            <Heading size="md">Purchasing a Cottage/Second Home</Heading>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={4}>
                        <Text mb={3}>
                        Exploring the possibility of acquiring a picturesque cottage, a tranquil summer residence, or a conveniently located city condominium as your secondary home? Seize the opportunity to leverage the equity in your current home to finance either the down payment or the entire purchase. Generally, a minimum down payment of 5% is required for secondary homes, though certain property types may warrant higher down payment thresholds.
                        </Text>
                        <Text mb={3}>
                        Before embarking on your quest for the ideal second property, it is imperative to engage in thorough consultations with trusted experts, including your mortgage agent/broker, financial planner, and realtor. These seasoned advisors will assist you in establishing a well-defined purchase budget, unraveling potential tax implications, and ensuring the identification of a property that impeccably aligns with your specific requirements.
                        </Text>
                        <Text mb={3}>
                        When seeking a charming summer cottage, bear in mind that lenders impose certain restrictions on property types, which influence the corresponding down payment criteria. For properties meeting the Type A Criteria (see below), securing a mortgage with a mere 5% down payment is feasible. Conversely, Type B properties (see below) typically necessitate a minimum 10% down payment. Opting to forgo Mortgage Default Insurance may call for down payments ranging from 20% to 50%, contingent upon the property criteria. Rely on our expertise to guide you through the myriad options at your disposal.
                        </Text>
                        <Text mb={3}>
                        In the case of year-round homes designated as secondary properties, a 5% down payment is generally applicable, affording you the opportunity to fulfill your aspirations.
                        </Text>
                        <Text mb={3}>
                        If your country abode leaves you yearning for a weekday sanctuary in the bustling city, fear not. Typically, a down payment as low as 5% suffices to secure a mortgage for such desirable condominium acquisitions.
                        </Text>
                        <Text mb={3}>
                        Unveil the perfect vacation home that harmonizes with your fiscal prudence and lifestyle preferences. Entrust us with the privilege of transforming your cherished dream of owning a captivating getaway into an awe-inspiring reality.
                        </Text>
                        <SpringButton as={Link} to="/doc-page" variant="outline" mb={3}>
                            Important Documents
                        </SpringButton>
                        <Text mb={3}>
                        Figuring out your second home budget is another thing to think about. Here is a list we have compiled:
                        </Text>
                        <List styleType="disc" pl={5} mb={3}>
                                        <ListItem>Insurance</ListItem>
                                        <ListItem>Property taxes</ListItem>
                                        <ListItem>Utilities (is it 3 season or 4?)</ListItem>
                                        <ListItem>Maintenance and repairs</ListItem>
                                        <ListItem>What will your mortgage be?</ListItem>
                                        <ListItem> Entertainment (TV, Internet, phone, etc.)</ListItem>
                                    </List>

                        <p>
                            If you are in the market for your first home, your second or tenth home, give us a call today, I’m here to help find solutions that work for your needs, wants and lifestyle.
                        </p>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    );
}

export default HomePurchase;