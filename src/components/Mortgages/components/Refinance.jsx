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
import { Link } from "react-router-dom";
import SpringButton from '../../../theme/SpringButon';
import { GiFingerPrint, GiBank, GiIdCard } from "react-icons/gi"; // import the icons

const Refinance = () => {

    return (
        <Box p={4} flexDirection="column">
            <Heading size="md" mb={6} mx="2em">Unlocking the Potential of Mortgage Refinancing</Heading>
            <Text mb={6} mx="3em">
                At Main Mortgage, we understand that there are numerous reasons why homeowners choose to refinance their mortgages. Whether it's for home improvements, acquiring another property, funding post-secondary education, or consolidating debts to save money, refinancing offers a range of benefits. By taking advantage of lower interest rates or addressing higher interest rate debts, refinancing allows you to regain control over your monthly payments while actively reducing your debt, not just the interest.
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
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">What is Mortgage Refinancing?</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Mortgage refinancing involves securing a new mortgage to repay the existing one and borrowing against the equity in your home. The maximum amount you can borrow is typically 80% of the current appraised value of your home, minus any outstanding mortgage balance and penalties. It's important to note that there are associated costs with refinancing, as the old mortgage must be discharged and the new mortgage registered on the title. However, some lenders offer in-house legal services to streamline the process and minimize costs.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Debt Consolidation</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                Many homeowners carry credit card debt or lines of credit with higher interest rates than their current mortgages. By leveraging the equity in your mortgage, you can save on interest costs and not only improve your monthly cash flow but also potentially reduce the overall years it takes to repay your mortgage. Utilizing your mortgage equity to pay off your bills sooner and consolidate your debts can significantly decrease your interest payments and overall financial burden. Consolidating over-extended credit card and consumer debt is a prevalent issue faced by many Canadians. Our team can provide a no-cost, no-obligation consultation to determine the potential interest savings available to you through debt consolidation.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionButton _expanded={{ bg: 'green', color: 'white' }}>
                            <Box flex="1" textAlign="left">
                                <Heading size="md">Considerations and Prepayment Penalties</Heading>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Text mb={3}>
                                While mortgage refinancing can yield substantial savings, it's essential to be aware of potential costs involved. Most mortgages have prepayment penalties that are charged when the terms of the mortgage are broken. These fees can be significant, so it's crucial for borrowers to understand if they will incur a prepayment charge and, if so, its magnitude. The goal of refinancing is to improve your financial situation, so if a prepayment charge would cause financial strain without delivering long-term benefits, it may be wise to stick with your current mortgage. In some cases, lenders may be willing to work with us to offer a "blended" interest rate that helps avoid penalties, depending on the prevailing interest rates. Additionally, closing costs associated with refinancing will apply. Our knowledgeable agents will assist you in determining whether breaking your mortgage to refinance and paying an early payout penalty will result in long-term savings. If it proves beneficial, the prepayment penalties can be absorbed into the new mortgage loan, eliminating any out-of-pocket expenses.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion >
            </Box >
        </Box>
    );
}

export default Refinance;