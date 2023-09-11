import {
    Box,
    Grid,
    Heading,
    Image,
    Text
} from "@chakra-ui/react";
import DoraImg from "../../../assets/Dora.png";
import MtgImg from "../../../assets/mtg.jpg";
const color = "blue.500";
const bgColors = ["red.50", "green.50", "blue.50"];





const AboutUs = () => (
    <Box p={4}>
        <Grid
            templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
            gap={6}
            minHeight="90vh"
        >
            {/* First Row */}
            <Box>
                <Heading as="h1" size="2xl" color="green.500" mb={5}>
                    Our Mission 
                </Heading>
                <Text>
                    While obtaining a mortgage can sometimes be daunting and complicated, it is our mission at VERICO The Mortgage Professionals to provide you, our client, a quick, easy and understandable way to getting a mortgage loan.
                    By shopping the mortgage market using our proprietary technology, an answer to your mortgage application is almost instantaneous. We are the first company in Canada to offer this type of online service.
                    VERICO The Mortgage Professionals believes that mortgage approvals should be available 24/7 and we are dedicated to saving our clients time and money by eliminating the need to shop multiple lenders. Our online application process is completely free, secure, and without obligation.
                    Our dedication to superior client service includes a prompt response to your applications, email and telephone calls.
                    VERICO The Mortgage Professionals is in the business of getting to YES!!   How can we help?
                </Text>
            </Box>
            <Box>
                <Image src={DoraImg} alt="Description" />
            </Box>
            <Box>
        <Image src={DoraImg} alt="Dora" />
      </Box>
      <Box>
      <Heading as="h1" size="2xl" color="green.500" mb={5}>
                    About Dora
                </Heading>
        <Text>
          Dora has been in the mortgage industry for 38 years. She joined The Mortgage Professionals in 2006, as a Licensed Mortgage Agent. Dora has worked at a major bank and in the Credit Union system since 1978. As an Accredited Mortgage Professional, Dora provides honest, friendly, knowledgeable mortgage advice.
          Buying a home is one of the most important financial decisions your will make, so using a professional in the Mortgage Industry is in your best interest. As Dora works for you, she will work hard to find the best products, mortgage services to best suit your individual needs. Whether a first-time buyer, buying a cottage, rental property, or second home, and most of all renewing/refinancing your present mortgage, she will put her expertise to work for you.
          The mortgage process is complicated and in most cases the lender pays the fees. Please feel free to call/email/text 24/7, to arrange an appointment to discuss your options.
        </Text>
      </Box>

      {/* Third Row */}
      <Box>
      <Heading as="h1" size="2xl" color="green.500" mb={5}>
                    About the Mortgage Professionals
                </Heading>
        <Text>
          The Mortgage Professionals began in 1989 in the founder/s garage. Locally owned and operated for almost thirty years, the company has grown to 30+ staff across 5 offices from Kingston to Gananoque.
          The Mortgage Professionals are Eastern Ontario/s largest mortgage brokerage, processing over $300m of mortgage volume annually. We are also Kingston/s most recognized mortgage brokerage, having been nominated several times nationally as Mortgage Brokerage of the Year, as Employer of Choice and having won National Mortgage Brokerage of the Year. Our Brokers have been recognized nationally as Top 20 Mortgage Brokers in Canada, locally as Kingston This Week/s Favourite Mortgage Brokers and even in the Canadian Mortgage Hall of Fame.
        </Text>
      </Box>
      <Box>
        <Image src={MtgImg} alt="MTG" />
      </Box>
    </Grid>
  </Box>
);

export default AboutUs;