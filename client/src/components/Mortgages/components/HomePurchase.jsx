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
    Button,
    Table,
    Tbody,
    Tr,
    Td,
    Th,
    Circle,
    Grid,
    useBreakpointValue
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import SpringButton from '../../../theme/SpringButon';
import { GiFingerPrint, GiBank, GiIdCard } from "react-icons/gi"; // import the icons

const HomePurchase = () => {
    const iconSize = useBreakpointValue({ base: "60", md: "120", lg:"180" }); // size of icon depending on breakpoint
    const iconDisplay = useBreakpointValue({ base: "none", md: "none", lg: "block" }); // display property depending on breakpoint

    return (
        <Box p={4} flexDirection="column">
            <Heading size="md" mb={6} mx="2em">Navigating the Mortgage Process for Home Buyers</Heading>
            <Text mb={6} mx="3em">
                At Main Mortgage, we understand that buying a home involves a multitude of options and considerations. Whether you're a first-time home buyer, looking to purchase your primary residence, interested in buying a rental property, seeking a cottage or second home, considering purchase, improvements, and renovations, or new to Canada, we are here to guide you every step of the way.
            </Text>
            {/* 3 icons inserted here */}
            <Box display={iconDisplay}>
                <Grid templateColumns={"repeat(3, 1fr)"} gap={4} justifyContent="center" mx="auto" p={5} alignItems="center" pb="3em">
                    <Circle size={iconSize} bg="gray.100" boxShadow="md">
                        <GiFingerPrint size="80%" minWidth="30px"/>
                    </Circle>
                    <Circle size={iconSize} bg="gray.100" boxShadow="md">
                        <GiBank size="70%" />
                    </Circle>
                    <Circle size={iconSize} bg="gray.100" boxShadow="md">
                        <GiIdCard size="70%" />
                    </Circle>
                </Grid>
            </Box>
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
                                        <Text mb={3}>
                                            The First-Time Home Buyer Incentive is a program that eases the process of purchasing a home by offering an additional 5% or 10% towards your down payment, courtesy of the Government. This program employs a shared equity mechanism, which implies that when repaying the Government, either 5% or 10% of the property's market value at the time of repayment is expected. The maximum repayment amount would be:
                                        </Text>
                                        <List styleType="disc" pl={5} mb={3}>
                                            <ListItem>In case of appreciation, the Incentive amount plus a maximum gain to the Government of 8% per annum (not compounded) on the Incentive amount from the date of advance to the time of repayment.</ListItem>
                                            <ListItem>In case of depreciation, the Incentive amount minus a maximum loss to the Government of 8% per annum (not compounded) on the Incentive amount from the date of advance to the time of repayment.</ListItem>
                                        </List>
                                        <Text mb={3}>
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
                                        <Text mb={3}>The First-Time Home Buyer Incentive has certain eligibility criteria that need to be satisfied:</Text>
                                        <List styleType="disc" pl={5} mb={3}>
                                            <ListItem>Your total annual qualifying income doesn’t exceed $120,000 ($150,000 if the home you are purchasing is in Toronto, Vancouver, or Victoria).</ListItem>
                                            <ListItem>Your total borrowing is no more than 4 times your qualifying income (4.5 times if the home you are purchasing```jsx
                                                is in Toronto, Vancouver or Victoria).</ListItem>
                                            <ListItem>You or your partner are a first-time homebuyer.</ListItem>
                                            <ListItem>You are a Canadian citizen, permanent resident, or non-permanent resident authorized to work in Canada.</ListItem>
                                            <ListItem>You meet the minimum down payment requirements with traditional funds.</ListItem>
                                        </List>
                                        <Text mb={3}>
                                            The Incentive is akin to a second mortgage on your home. Your first mortgage must constitute more than 80% of the property's value and be eligible through Canada Guaranty, CMHC, or Sagen. The insurance premium is based on the loan-to-value ratio of the first mortgage only.
                                        </Text>
                                        <Heading size="sm" mb={3} mt={4}>Important Considerations</Heading>
                                        <Text mb={3}>
                                            The Incentive may come with additional costs such as higher legal fees, appraisal fees, other fees related to the incentive, and increased property insurance premiums. It's essential to consider these before making a decision.
                                        </Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Purchasing Your Primary Home</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Finding a place to call home can be exciting and challenging, we enjoy helping you find that sense of pride and stability of homeownership.
                                By definition “A person's primary residence, or main residence is the dwelling where they usually live, typically a house or an apartment. ... A primary residence is considered to be a legal residence for the purpose of income tax and/or acquiring a mortgage.”
                                In order for your new home to qualify as your primary residence, you must answer yes to the following questions:
                            </Text>
                            <List styleType="disc" pl={5} mb={3}>
                                <ListItem>Are you going to be living in this home for a majority of the calendar year?</ListItem>
                                <ListItem>Are you employed in the same city/town or area as the property? (or within reasonable driving distance)</ListItem>
                            </List>
                            <SpringButton mb={3} as={Link} to="/doc-page" variant="outline">
                                Important Documents
                            </SpringButton>
                            <Text mb={2}>
                                If you are in the market for your first home, your second or tenth home, give us a call today, I’m here to help find solutions that work for your needs, wants and lifestyle.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* New Section: Buying a Rental Property */}
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
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
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
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

                            <Text mb={3}>
                                If you are in the market for your first home, your second or tenth home, give us a call today, I’m here to help find solutions that work for your needs, wants and lifestyle.
                            </Text>
                            <Box
                                flex="1"
                                position="relative"
                                maxHeight="90vh"
                                margin="auto"
                                minWidth="200px"
                                overflowY="auto"
                                ml={[5, 2]}
                                mt={[10, 5]}
                                p={5}
                                bg="gray.100"
                                borderRadius="md"
                                boxShadow="md"
                                display="flex"
                                flexDirection={["column", "column", "row"]}
                            >
                                <Box flex="1" pr={[0, 0, 5]} mb={[5, 5, 0]}>
                                    <Heading size="sm" mb={3}>
                                        Secondary Homes (Type A)
                                    </Heading>
                                    <List styleType="disc" pl={5} mb={3}>
                                        <ListItem>Foundation must be permanent and installed beyond the frost line. This includes concrete/concrete block or preserved wood foundations certified by a professional engineer or post/pier foundations on solid bedrock.</ListItem>
                                        <ListItem>Must be zoned and used as residential, rural or seasonal. We do not accept mixed uses or rental pooling.</ListItem>
                                        <ListItem>Freehold or condominium title. We do not accept co-ops or ¼ interest ownership.</ListItem>
                                        <ListItem>At minimum, property must have a kitchen, 3-piece bathroom, bedroom, and common area.</ListItem>
                                        <ListItem>Remaining economic life must be 25 years.</ListItem>
                                        <ListItem> Year-round road access on reasonable quality public roads, serviced by the local municipality. (indent)  We also allow privately serviced roads, provided there is a maintenance contract in place.</ListItem>
                                        <ListItem>Property must be winterized with a permanent heat source. For example, heating can be baseboard, forced air, water radiator, radiant, coal, propane, geothermal heat pumps, or heat pumps.</ListItem>
                                        <ListItem>Good quality construction with no signs of deferred maintenance.</ListItem>
                                        <ListItem> Water source: well, municipal serviced, and cistern. Water source must be drinkable. We accept lake or river water, provided the property has its own filtration system. For example, a reverse osmosis system.</ListItem>
                                        <ListItem> There must be good market appeal in the area with no adverse influences or neighbourhood nuisances.</ListItem>

                                    </List>
                                </Box>
                                <Box flex="1">
                                    <Heading size="sm" mb={3}>
                                        Vacation Homes (Type B)
                                    </Heading>
                                    <text mb={3}>
                                        All Type A property requirements apply to Type B, except for the
                                        following:
                                    </text>

                                    <List styleType="disc" pl={5} mb={3}>
                                        <ListItem>No permanent heat source is required. For example, a wood stove, fireplace, stove or heat blower is acceptable.</ListItem>
                                        <ListItem>Foundation may be floating. For example, sitting on blocks.</ListItem>
                                        <ListItem>Water source needn't be drinkable. However, there must be running water in the home.
                                            Boat access only accepted.
                                        </ListItem>
                                        <ListItem>Seasonal road use is acceptable. This means the road does not have to be plowed during the winter.
                                        </ListItem>
                                    </List>

                                </Box>
                            </Box>
                        </AccordionPanel >
                    </AccordionItem >


                    {/* renos */}

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Purchase, Improvements and Renovations</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                After identifying a suitable home, it is essential to obtain quotes from contractors for the proposed renovation work. These quotes are then factored into the overall purchase price, establishing a revised value for the property. Subsequently, your minimum down payment is calculated based on this new value.
                            </Text>
                            <Text mb={3}>
                                The quotes, along with the offer to purchase, are submitted to the lender for approval. Both the lender and mortgage insurer carefully review the quotes to ensure that the added costs contribute directly to the appraised value of the home. In certain cases, an appraisal may be required to assess this accurately.
                            </Text>
                            <Text mb={3}>
                                Upon closing the transaction, the funds are transferred to your lawyer, who will hold them in trust until the renovation work is completed. Following the finalization of the renovations, an appraiser will conduct an inspection and prepare a comprehensive report, which will be submitted to the lender. Once the lender reviews and approves the report, your lawyer will be instructed to release the funds to you.
                            </Text>
                            <Text mb={3}>
                                It is important to note that, under the current regulations, you have the option to include up to 20% of the purchase price, with a maximum limit of $40,000, into your mortgage to cover renovation expenses.
                            </Text>
                            <Text mb={3}>
                                However, it is crucial to bear in mind that any changes to the type of work being performed after the mortgage funding are generally not permitted. In other words, you are unable to submit a quote for a new roof and subsequently decide to redirect the funds towards finishing the basement.
                            </Text>
                            <SpringButton as={Link} to="/doc-page" variant="outline" mb={3}>
                                Important Documents
                            </SpringButton>

                            <Box
                                flex="1"
                                position="relative"
                                maxHeight="90vh"
                                margin="auto"
                                minWidth="200px"
                                overflowY="auto"
                                ml={[5, 2]}
                                mt={[10, 5]}
                                mb="3"
                                p={5}
                                bg="gray.100"
                                borderRadius="md"
                                boxShadow="md"
                                display="flex"
                                flexDirection={["column", "column", "row"]}
                            >

                                <Heading size="sm" mb={3}>
                                    Here's an example:
                                </Heading>
                                <Table variant="simple" size="md">
                                    <Tbody>
                                        <Tr>
                                            <Td bg="gray.100" fontWeight="bold">Purchase price of home</Td>
                                            <Td>$260,000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td bg="gray.100" fontWeight="bold">Upgrades</Td>
                                            <Td>$15,000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td bg="gray.100" fontWeight="bold">New Value</Td>
                                            <Td>$275,000</Td>
                                        </Tr>
                                        <Tr>
                                            <Td bg="gray.100" fontWeight="bold">Minimum down payment</Td>
                                            <Td>$13,750 (5% of new value)</Td>
                                        </Tr>
                                        <Tr>
                                            <Td bg="gray.100" fontWeight="bold">Mortgage Amount</Td>
                                            <Td>$261,250 (plus CMHC/Genworth)</Td>
                                        </Tr>
                                    </Tbody>
                                </Table>



                            </Box>

                        </AccordionPanel>
                    </AccordionItem>

                    {/* New to Canada */}
                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">New to Canada</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Navigating the process of obtaining a mortgage as a newcomer to Canada can pose its challenges. Lenders traditionally rely on credit history to assess mortgage eligibility, a factor that requires time to establish. When you are new to Canada, it is understandable that your credit profile may be limited or non-existent. However, rest assured, we offer specialized programs tailored to assist you in this situation. You may be eligible for a down payment as low as 5% for your property acquisition. The specific mortgage options available to you, as well as the documentation required by your mortgage agent, will depend on your status as a permanent resident, your credit rating, the amount you have saved for a down payment, and the source of those funds. In some cases, lenders may request credit history or bank statements from your country of origin to aid in their decision-making process.
                            </Text>

                            <SpringButton mb={3} as={Link} to="/doc-page" variant="outline">
                                Important Documents
                            </SpringButton>
                            <Text mb={3}>
                                If you hold permanent resident status and boast a strong credit rating, you may be well-positioned to qualify for a conventional mortgage. However, if you do not meet the specific qualification criteria for a conventional mortgage, there is still hope. The "New to Canada" Programs offered by Canada's three mortgage default insurance providers (CMHC, Genworth Financial, or Canada Guaranty) present viable options for newcomers like yourself, aiming to facilitate mortgage access for home purchases.
                            </Text>
                            <Text mb={3}>
                                We understand the unique challenges you may face as a newcomer, and we are committed to supporting you throughout the process of realizing your homeownership dreams in Canada.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>


                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: '#176572', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Military/Employer Relocation</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Employer relocation policies may vary significantly, with many companies covering expenses related to house-hunting trips and relocation costs, including moving services, family travel arrangements, temporary housing, and more.
                            </Text>
                            <Box flex="1" textAlign="left">
                                <Heading size="sm">Where to Start</Heading>
                            </Box>
                            <Text mb={3}>
                                In navigating the complexities of relocation, it is paramount to have professionals who possess extensive local knowledge and robust connections within Kingston and its neighboring communities. This is precisely where our expertise shines.
                            </Text>
                            <SpringButton mb={3} as="a"
                                href="https://bgrsguide.bgrs.ca/account/login"
                                variant="outline"
                                target="_blank"
                                rel="noopener noreferrer">
                                Access BGRS Account
                            </SpringButton>
                            <Text mb={3}>
                                If you are in the market for your first home, your second or tenth home, give us a call today, I’m here to help find solutions that work for your needs, wants and lifestyle.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion >
            </Box >
        </Box>
    );
}

export default HomePurchase;