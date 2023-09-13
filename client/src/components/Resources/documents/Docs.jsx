import {
    Box,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    HStack,
    Checkbox,
    IconButton,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Heading,
    Grid,
    Text
} from "@chakra-ui/react";
import { InfoOutlineIcon } from '@chakra-ui/icons';

const color = "blue.500";
const bgColors = ["red.50", "green.50", "blue.50"];

const ChecklistItem = ({ label, info }) => (
    <HStack spacing="16px" align="start"> {/* reduced spacing for collapsed items */}
        <Checkbox>{label}</Checkbox>
        <Popover>
            <PopoverTrigger>
                <IconButton aria-label="Info" icon={<InfoOutlineIcon />} variant="ghost" />
            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>{info}</PopoverBody>
            </PopoverContent>
        </Popover>
    </HStack>
);

const ChecklistCategory = ({ title, children, color }) => (
    <AccordionItem>
        <AccordionButton _expanded={{ bg: "green", color: 'white' }}>
            <Box flex="1" textAlign="left">
                <Heading size="md">{title}</Heading>
            </Box>
            <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
            <Grid templateColumns={children.length >= 3 ? "repeat(2, 1fr)" : "1fr"} gap={3} pt="7">
                {children}
            </Grid>
        </AccordionPanel>
    </AccordionItem>
);

const DocumentChecklist = () => (
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
            <Accordion minWidth="100%" defaultIndex={[0]} allowMultiple>
                <ChecklistCategory bgColor={bgColors[0]} title="1: Identification" >
                    <ChecklistItem label="Government-issued ID (with current address)" />
                    <ChecklistItem label="SIN number" />
                </ChecklistCategory>

                <ChecklistCategory title="2: Proof of income" color={bgColors[1]}>
                    <ChecklistItem label="Most two-three recent pay stubs" info="Your recent paystubs will verify your income. Mortgage lenders may ask for the most recent two-three pay stubs, so make sure you have them handy." />
                    <ChecklistItem label="T1 general tax form from the prior year" info="This form demonstrates how much income you earned the previous tax year. In general, lenders will only require your T1 from the prior year." />
                    <ChecklistItem label="Notice of assessment from the last two years" info="An NOA summarizes a successful submission of your tax returns to the Canada Revenue Agency. Lenders will use it to determine your debt-to-income ratios. You will need your NOAs from the two most recent tax years." />
                    <ChecklistItem label="T4 tax form" info="Your T4 tax form shows how much income you received as an employee. Your T4A tax form will list any income, such as pensions, severance pay, and investment income. Self-employed individuals receive a T4A, whereas employees receive a T4. You receive these forms each year from your employer." />
                    <ChecklistItem label="Letter of employment from the previous 30 days" info="This letter provides lenders with a sense of your job stability. Make sure the letter includes: How long you have worked for the current company, Employment status (permanent, temporary, or probationary employee), Whether you are full-time, part-time, or seasonal, Hourly or annual salary rate, Guaranteed hours (for part-time or hourly employees), Current role and title. Additionally, make sure the letter is on a company letterhead, signed by HR or a manager, and no older than 30 days." />
                </ChecklistCategory>

                <ChecklistCategory title="3: Basic financial information" color={bgColors[2]}>
                    <ChecklistItem label="Credit score above 600" info="Your credit score is a three-digit number that lenders use to measure your creditworthiness. To receive a mortgage, you'll need a minimum credit score of 600 for banks. There are many ways to check your credit score for free." />
                    <ChecklistItem label="Mortgage pre-approval letter" info="A mortgage pre-approval letter demonstrates that you have enough income and credit to meet the lending criteria. You can then use it when applying for a mortgage in Canada, which could qualify you for lower Canadian interest rates." />
                    <ChecklistItem label="Bank statements from the most recent one-two months" info="Your bank statements will show your net worth and help determine your total liabilities or debts. Mortgage lenders may ask for three full years of statements. If not, the most recent one-two months should be enough." />
                    <ChecklistItem label="List of assets and investments" info="Your list of assets will show the value of your investments and property. This may include cars, boats, real estate, RRSPs, and stocks. Lenders will use this to calculate your net worth." />
                </ChecklistCategory>

                <ChecklistCategory title="4: Down Payment Confirmation" color={bgColors[1]}
                >
                    <ChecklistItem label="Statement of savings or investments no older than 90 days" info="This document proves that the funds you use for your down payment are liquid (meaning they can be easily accessed). The statement must be less than 90 days old and list the account holder, account number, type of account, and current balance. If you are selling stocks in a taxable account, keep in mind the capital gains tax you will need to pay at the end of the tax year." />
                    <ChecklistItem label="Sale agreement of existing property" info="Existing homeowners can use the proceeds from selling their previous house as the downpayment for their next house. If you are using the sale of your last home for this, then you will need to include a copy of the offer.

However, if you can/t sell your home fast enough, then don't worry - you can use a HELOC or a bridge loan to finance your down payment. Just be aware of how these loans affect your debt servicing ratios, as mentioned in category one." />
                    <ChecklistItem label="RRSP withdrawals (first-time buyers)" info="First-time homebuyers in Canada can withdraw up to $35,000 from their RRSPs for a down payment. This is known as the RRSP Home Buyers' Plan, which allows qualified individuals to receive the money without paying taxes. However, the funds must be repaid into your account within 15 years." />
                    <ChecklistItem label="Gift letter (gifting down payment)" info="A gift letter proves that you will receive funds for your down payment from an outside source, such as friends and family. The letter should include:

Name of giver,
Amount gifted,
A statement that the funds are a gift and not a loan)" />
                </ChecklistCategory>

                <ChecklistCategory title="5: Property details" color={bgColors[2]}  >
                    <ChecklistItem label="Final purchase and sale agreement" info="This is the signed contract between you and the seller. Lenders want to see this because it provides details such as the date of purchase and final purchase price." />
                    <ChecklistItem label="MLS Listing" info="The listing is helpful to mortgage lenders because it provides them with an estimation of your property taxes, utility costs, and condo fees (if buying a condominium). These are all inputs required to calculate your gross debt service ratio." />
                    <ChecklistItem label="The legal description of the home you are buying" info="A legal description is a complete legal description of the property that states the full address and postal code. This information can be found on your final purchase and sale agreement and on documents such as tax assessments, title certificates, etc." />
                    <ChecklistItem label="Homeowners insurance policy" info="Most mortgage lenders in Canada will require you to have homeowners insurance. This will protect your home from repair costs due to water damage, fire, and more. You will need to provide a copy of the policy to your lender. If you are buying a condo then you will need to prove you have condo insurance. If you need home insurance, the best way is to apply for quotes online. This will give you a feel for pricing, and understand which policies you need. You can visit our page for a full list of insurance providers in Canada." />
                    <ChecklistItem label="Lenders' title insurance" info="Finally, lenders require you to obtain title insurance in Canada. This will protect your lender if someone else has a claim on your property." />

                </ChecklistCategory>
            </Accordion>
        </Box>
    </Box>
);


export default DocumentChecklist;