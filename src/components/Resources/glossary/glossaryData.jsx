const glossaryData = [
    {
      term: 'Adjustable interest rate mortgage',
      definition: 'A mortgage in which both the interest rate and the monthly payments fluctuate based on changes in the market rates.',
    },
    {
      term: 'Amortization',
      definition: 'The duration required to fully repay a mortgage, provided that all conditions are met and timely payments are made.',
    },
    {
      term: 'Application',
      definition: 'A form used to apply for a mortgage, containing relevant personal and financial information of the applicant.',
    },
    {
      term: 'Appraisal',
      definition: 'An evaluation estimating the current market value of a home.',
    },
    {
      term: 'Appraiser',
      definition: 'A certified professional responsible for conducting home appraisals.',
    },
    {
      term: 'Appreciation',
      definition: 'The increase in the value of a home or any other possession from the time it was purchased.',
    },
    {
      term: 'Approved lender',
      definition: 'A lending institution, such as a bank, authorized by the Government of Canada to provide loans under the terms of the National Housing Act. Only approved lenders can offer CMHC-insured mortgages.',
    },
    {
      term: 'Assumption agreement',
      definition: 'A legal document that obligates a person buying a home to take over the mortgage of the builder or the previous owner.',
    },
    {
      term: 'Blended payment',
      definition: 'A regular mortgage installment that includes payments toward both the mortgage principal and the interest.',
    },
    {
      term: 'Builder',
      definition: 'An individual or company engaged in the construction of homes.',
    },
    {
      term: 'Canada Mortgage and Housing Corporation (CMHC)',
      definition: 'As Canada’s trusted voice on housing, CMHC contributes to the stability of the housing market and financial system, provides support for Canadians in housing need, and offers objective housing research and information to Canadian governments, consumers, and the housing industry.',
    },
    {
      term: 'Certificate of status (or "estoppel certificate")',
      definition: 'A certificate that outlines the financial and legal status of a condominium corporation. (This term does not apply in Quebec.)',
    },
    {
      term: 'Certificate of location (or "survey")',
      definition: 'A document that displays the legal boundaries and measurements of a property, specifies the location of any buildings, and indicates whether any other parties have the right to cross over the property for a specific purpose.',
    },
    {
      term: 'Closed mortgage',
      definition: 'A mortgage that typically cannot be paid off or renegotiated before the term ends without the lenders permission and incurring a financial penalty. Some closed mortgages allow for additional or accelerated payments, but only if specified in the mortgage agreement.',
    },
    {
      term: 'Closing costs',
      definition: 'The legal fees, transfer fees, disbursements, and other expenses that must be paid when purchasing a home. These costs are in addition to the down payment and any applicable GST, PST, and HST. Closing costs are due on the day the buyer officially takes ownership of the home and typically range from 1.5% to 4% of the purchase price.',
    },
    {
      term: 'Closing date',
      definition: 'The date when the sale of the property is finalized, and the new owner takes possession of the home.',
    },
    {
      term: 'Commitment letter (or "mortgage approval")',
      definition: 'A written notification from a lender to a borrower indicating that a mortgage loan of a specific amount is approved under certain terms and conditions.',
    },
    {
      term: 'Compound interest',
      definition: 'Interest calculated on both the original principal and the interest that has already been earned (or "accrued") on that principal.',
    },
    {
      term: 'Conditional offer',
      definition: 'An offer to purchase a home that includes one or more conditions (e.g., the buyers ability to obtain a mortgage) that must be fulfilled before the sale can be officially completed.',
    },
    {
      term: 'Condominium (or "strata")',
      definition: 'A form of homeownership where individuals own the unit they reside in and share ownership of common areas with other owners. Common areas may include parking facilities, hallways, elevators, lobbies, gyms, swimming pools, and the grounds or landscaping.',
    },
    {
      term: 'Contractor',
      definition: 'An individual responsible for the construction or renovation of a home, including project scheduling and management.',
    },
    {
        term: 'Conventional mortgage',
        definition: 'A mortgage loan equal to or less than 80% of the value of a property, where the down payment is at least 20%. Conventional mortgages typically do not require mortgage loan insurance.',
      },
      {
        term: 'Counteroffer',
        definition: 'An offer made by the seller of a home after rejecting an offer by a potential buyer. The counteroffer usually modifies something from the original offer, such as the price or closing date.',
      },
      {
        term: 'Credit bureau',
        definition: 'A company that gathers information from various sources about a person\'s borrowing and bill-paying habits. This information is provided to lenders to help them assess whether or not to lend money to that person.',
      },
      {
        term: 'Credit history (or "credit report")',
        definition: 'The report used by lenders to determine if a person should be granted a mortgage, based on their creditworthiness and past financial behavior.',
      },
      {
        term: 'Curb appeal',
        definition: 'The attractiveness of a home when viewed from the street, including features like landscaping and a well-maintained exterior.',
      },
      {
        term: 'Deed',
        definition: 'A legal document that transfers ownership of a home from the seller to the buyer.',
      },
      {
        term: 'Default',
        definition: 'Failing to make a mortgage payment on time or failing to comply with the terms of a mortgage loan agreement. If borrowers default on their mortgage payments, their lender can charge them a penalty or even take legal action to take possession of their home.',
      },
      {
        term: 'Delinquency',
        definition: 'Failing to make a mortgage payment on time.',
      },
      {
        term: 'Deposit',
        definition: 'Money that a buyer places in trust to demonstrate their seriousness when making an offer to purchase a home. The deposit is held by the real estate agent or lawyer (or notary in Quebec) until the sale is complete, and then it is transferred to the seller.',
      },
      {
        term: 'Depreciation',
        definition: 'A decrease in the value of a home or other possession from the time it was purchased.',
      },
      {
        term: 'Down payment',
        definition: 'The portion of the home\'s purchase price that is not financed by a mortgage loan. The buyer must pay the down payment from their own funds (or other eligible sources) before securing a mortgage.',
      },
      {
        term: 'Duplex',
        definition: 'A building that contains two separate and complete single-family homes located either adjacent to each other or one on top of the other.',
      },
      {
        term: 'Easement',
        definition: 'A legal interest in a property owned by another person or company for a specific limited purpose. For example, a public utility company may have an easement that allows them to pass through a property.',
      },
      {
        term: 'Emergency fund',
        definition: 'Money that a homeowner regularly sets aside to cover emergencies or major repairs. Owners should typically save around 5% of their monthly income for emergencies.',
      },
      {
        term: 'Equity',
        definition: 'The cash value that a homeowner has in their home after subtracting the amount of the mortgage or other debts owed on the property. Equity usually increases over time as the mortgage loan is gradually paid off, and it can also be affected by changes in market values or home improvements.',
      },
      {
        term: 'Estoppel certificate (or "certificate of status")',
        definition: 'A certificate that outlines the financial and legal status of a condominium corporation. (This term does not apply in Quebec.)',
      },
      {
        term: 'First-Time Home Buyer Incentive',
        definition: 'A government program that helps people across Canada purchase their first home. It offers eligible participants 5% or 10% of the home\'s purchase price to put toward a down payment, reducing their mortgage carrying costs and making homeownership more affordable.',
      },
      {
        term: 'Fixed interest rate mortgage',
        definition: 'A mortgage with an interest rate that remains unchanged throughout the term of the mortgage.',
      },
      {
        term: 'FlexHousingTM (or "universal design")',
        definition: 'An approach to housing that encourages the design and construction of homes that can be easily and inexpensively modified to accommodate changes in the needs, mobility, or lifestyle of the occupants.',
      },
      {
        term: 'Foreclosure',
        definition: 'A legal process whereby the lender takes possession of a property if the borrower defaults on a loan. The lender then sells the property to cover the unpaid debt.',
      },
      {
        term: 'Freehold',
        definition: 'A form of homeownership where the homeowner has full and exclusive ownership rights to a home and the land it sits on for an indefinite period. Freehold ownership is in contrast to leasehold ownership, which grants the homeowner the right to use and occupy the land and building for a limited defined period.',
      },
      {
        term: 'Gross debt service (GDS) ratio',
        definition: 'The percentage of a person or household\'s gross monthly income that is allocated to pay the mortgage principal and interest, property taxes, and heating costs. It may also include 50% of any condominium fees, 50% of any homeowners association fees, and 100% of the site rent for leasehold tenure. To qualify for a mortgage, it is recommended that the borrower\'s GDS ratio does not exceed 32%.',
      },
      {
        term: 'Gross monthly income',
        definition: 'The total monthly income of a person or household before taxes and other deductions.',
      },
      {
        term: 'High-ratio mortgage',
        definition: 'A mortgage loan for more than 80% of the value of a property, where the down payment is less than 20%. A high-ratio mortgage usually needs to be insured against default with mortgage loan insurance provided by CMHC or a private company.',
      },
      {
        term: 'Home inspection',
        definition: 'A thorough examination and assessment of a home\'s state and condition by a qualified professional. The inspection includes the home\'s structural, mechanical, and electrical systems.',
      },
      {
        term: 'Home inspector',
        definition: 'A professional who examines a home for any issues that are broken, unsafe, or in need of replacement. The inspector also checks if the home has had any major problems in the past.',
      },
      {
        term: 'Home insurance premium',
        definition: 'The amount homeowners pay on a monthly or annual basis for home or property insurance.',
      },
      {
        term: 'Household budget',
        definition: 'A monthly plan that tracks household income and expenses to ensure that household members are living within their means and meeting their savings and investment goals.',
      },
      {
        term: 'Insurance broker',
        definition: 'A professional who assists homeowners in selecting and purchasing different types of insurance, including property insurance, life and disability insurance, and mortgage loan insurance.',
      },
      {
        term: 'Interest',
        definition: 'The cost of borrowing money. Interest is usually paid to the lender in regular installments along with the repayment of the principal amount.',
      },
      {
        term: 'Interest rate',
        definition: 'The rate used to calculate the amount a borrower has to pay a lender for the use of the money being loaned to them.',
      },
      {
        term: 'Land registration',
        definition: 'A system for recording legal interests in land, including ownership and disposition of land.',
      },
      {
        term: 'Land surveyor',
        definition: 'A professional who surveys a property in order to provide a land survey (or "certificate of location"). If the seller doesn\'t have a survey, or if it\'s more than five years old, the buyer will likely need to hire a surveyor before they can get a mortgage. A real estate agent usually helps coordinate the survey with the seller.',
      },
      {
        term: 'Land transfer tax',
        definition: 'A tax charged by many provinces and municipalities, usually a percentage of the purchase price, that the buyer must pay upon closing.',
      },
      {
        term: 'Lawyer',
        definition: 'A legal advisor (usually replaced by a notary in Quebec) who is licensed to practice law and who protects legal interests and reviews contracts.',
      },
      {
        term: 'Leasehold',
        definition: 'A form of homeownership where the homeowner buys the right to have full and exclusive ownership of a home and the land it sits on for a defined period. Leasehold ownership is in contrast to freehold ownership, which gives the homeowner the right to use and occupy the land and building for an indefinite period.',
      },
      {
        term: 'Lender',
        definition: 'A financial institution or other entity that loans money to individuals to buy a home or property.',
      },
      {
        term: 'Lien',
        definition: 'A claim against a property by another person or company for money owed by the owner or previous owner.',
      },
      {
        term: 'Lump sum prepayment',
        definition: 'An extra payment made to reduce the principal balance of a mortgage, with or without a penalty. Lump sum payments can help borrowers save on interest costs and pay off their mortgage sooner.',
      },
      {
        term: 'Manufactured home',
        definition: 'A single-family home that is built in a factory and then transported to a chosen location and placed onto a foundation.',
      },
      {
        term: 'Maturity date',
        definition: 'The last day of the term of a mortgage. On this day, the mortgage loan must either be paid in full, renegotiated, or renewed.',
      },
      {
        term: 'Mobile home',
        definition: 'A home that is built in a factory and transported to the place where it will be occupied. While mobile homes are usually placed permanently in one location, they can be moved again later if desired.',
      },
      {
        term: 'Modular home',
        definition: 'A single-family home that is built in a factory and typically shipped to a location in two or more sections (or "modules") to be assembled onsite.',
      },
      {
        term: 'Mortgage',
        definition: 'A loan given by a lender to a buyer to assist with the purchase of a home or property. The mortgage loan is usually repaid in regular payments that generally include both the principal and interest.',
      },
      {
        term: 'Mortgage approval (or "commitment letter")',
        definition: 'A written notification from a lender to a borrower indicating that a mortgage loan of a specific amount is approved under specific terms and conditions.',
      },
      {
        term: 'Mortgage broker',
        definition: 'A professional who works with many different lenders to find a mortgage that best suits the needs of the borrower.',
      },
      {
        term: 'Mortgage life insurance',
        definition: 'Insurance that protects the family of a borrower by paying off the mortgage if the borrower dies.',
      },
      {
        term: 'Mortgage loan insurance',
        definition: 'Insurance that protects a lender against default on a mortgage. Mortgage loan insurance is provided by CMHC or a private company and is usually required for any mortgage where the down payment is less than 20% of the purchase price or lending value of a home. Mortgage loan insurance helps Canadians purchase homes earlier and at interest rates that are comparable to buyers with a larger down payment.',
      },
      {
        term: 'Mortgage loan insurance premium',
        definition: 'The amount homebuyers have to pay to CMHC or another insurer to insure their mortgage against default if their down payment is less than 20% of the purchase price. The CMHC premium is calculated as a percentage of the mortgage loan and is based on factors like the size and source of the down payment. In general, the smaller the down payment is, the higher the insurance premiums will be. Premiums can typically be paid separately or included in the regular mortgage payments to the lender.',
      },
      {
        term: 'Mortgage payment',
        definition: 'A regularly scheduled payment that usually includes both the loan principal and the interest.',
      },
      {
        term: 'Mortgage stress test',
        definition: 'The stress test exercise ensures that homebuyers can afford payments at a qualifying interest rate that is typically higher than the actual rate in their mortgage contract. This helps ensure that homebuyers will have the means to make their mortgage payments if interest rates rise or their income decreases.',
      },
      {
        term: 'Mortgage term',
        definition: 'The length of time that the conditions of a mortgage, such as the interest rate and payment schedule, are in effect. Terms are usually between 6 months and 10 years. At the end of the term, the mortgage loan must either be paid in full, renewed, or renegotiated, usually with new conditions.',
      },
      {
        term: 'Net worth',
        definition: 'The total financial worth of a person, calculated by subtracting liabilities (everything the person owes) from assets (everything the person owns).',
      },
      {
        term: 'New home warranty program',
        definition: 'A program available in all provinces and some territories that guarantees that any defects in a new home will be repaired at no cost to the buyer within the period covered by the warranty.',
      },
      {
        term: 'Notary',
        definition: 'In Quebec, a notary (rather than a lawyer) handles the legal matters related to buying a home. These include protecting legal interests and reviewing any contracts.',
      },
      {
        term: 'Offer to purchase',
        definition: 'A written contract that sets out the terms and conditions under which a buyer agrees to buy a home. If the offer is accepted by the seller, it becomes a legally binding agreement.',
      },
      {
        term: 'Ongoing costs',
        definition: 'The monthly expenses that come with owning a home, including mortgage payments, property taxes, home insurance, utilities, ongoing maintenance, and repairs.',
      },
      {
        term: 'Open house',
        definition: 'A set period of time when potential buyers can come to look at a house or apartment that is for sale without an appointment.',
      },
      {
        term: 'Open mortgage',
        definition: 'A flexible mortgage loan that allows a borrower to pay off or renegotiate their loan at any time without having to pay penalties. Because of this flexibility, open mortgages usually have a higher interest rate than closed mortgages.',
      },
      {
        term: 'Payment schedule',
        definition: 'The schedule that borrowers agree to follow to pay back their mortgage loan. In most schedules, mortgage payments are made weekly, every two weeks, or once a month. Borrowers should talk to their lender to explore all possible options.',
      },
      {
        term: 'PITH',
        definition: 'An acronym that stands for mortgage Principal and Interest payments, property Taxes, and Heating costs — all the main costs paid by a homeowner on a monthly basis.',
      },
      {
        term: 'Power of sale',
        definition: 'A provision that gives a lender the power to sell a property if the borrower defaults on their mortgage. The ownership of the property changes hands after the sale is completed.',
      },
      {
        term: 'Prepayment options',
        definition: 'The ability for borrowers to make extra payments, increase their payments, or pay off their mortgage early without incurring a penalty.',
      },
      {
        term: 'Prepayment penalty',
        definition: 'A fee charged by the lender if borrowers pay more money on their mortgage than the prepayment option allows.',
      },
      {
        term: 'Principal',
        definition: 'The amount a person borrows for a loan, not including the interest.',
      },
      {
        term: 'Property (or home) insurance',
        definition: 'Insurance that protects the owners in case their home or building is damaged or destroyed by fire or other hazards listed in the policy.',
      },
      {
        term: 'Property taxes',
        definition: 'Taxes that are charged by the municipality based on the value of the home. In some cases, the lender will collect property taxes as part of the borrower’s mortgage payments and then pay the taxes to the municipality on the borrower’s behalf.',
      },
      {
        term: 'Real estate',
        definition: 'Property consisting of buildings and/or land.',
      },
      {
        term: 'Real estate agent',
        definition: 'A professional who acts as an intermediary between the seller and buyer of a property. They help the buyer find a home, make an offer, and negotiate the best price.',
      },
      {
        term: 'REALTOR.ca (formerly MLS.ca)',
        definition: 'An online service that provides descriptions of most of the homes for sale across the country. Homes on the site can be searched by location, price, size, or a number of other features. For Quebec listings, the equivalent site is centris.ca.',
      },
      {
        term: 'Reserve fund',
        definition: 'A sum of money put aside by a condominium corporation for the repair or replacement of common elements such as the roof, windows, boiler, hallway carpets, and other common assets and areas.',
      },
      {
        term: 'Row house',
        definition: 'One of several similar single-family homes that are joined side by side and share common walls.',
      },
      {
        term: 'Security',
        definition: 'Also called "collateral." Property that is pledged to guarantee a loan or other obligation that can be claimed by the lender if a loan isn’t repaid. With a mortgage, the home being purchased is used as security for the loan.',
      },
      {
        term: 'Semi-detached home',
        definition: 'A home that is attached to another home on one side.',
      },
      {
        term: 'Shared equity mortgage',
        definition: 'An arrangement where a borrower and a lender share equity (ownership) in a property, in exchange for a future value in the home at the time of repayment.',
      },
      {
        term: 'Single detached home',
        definition: 'A free-standing home, not attached to any other homes on either side, intended to be occupied by a single family.',
      },
      {
        term: 'Stacked townhouse',
        definition: 'Two-storey homes stacked one on top of the other, usually in groups of four or more.',
      },
      {
        term: 'Strata',
        definition: 'A type of homeownership where people own the unit they live in and share ownership of all common areas with the other owners. Common areas can include parking facilities, hallways, elevators, lobbies, gyms, swimming pools, and the grounds or landscaping.',
      },
      {
        term: 'Survey',
        definition: 'A document that shows the legal boundaries and measurements of a property, specifies the location of any buildings, and states whether anyone else has the right to cross over the property for a specific purpose.',
      },
      {
        term: 'Sustainable neighbourhood',
        definition: 'A neighbourhood that meets the needs of the residents while also protecting the environment.',
      },
      {
        term: 'Title',
        definition: 'A document that gives the holder legal ownership of a property.',
      },
      {
        term: 'Title insurance',
        definition: 'Insurance against losses or damages that could occur because of anything that affects the title to a property (for example, a defect in the title or any liens, encumbrances, or servitudes registered against the legal title to a home).',
      },
      {
        term: 'Total debt service (TDS) ratio',
        definition: 'The percentage of a person or household’s gross monthly income that goes to pay the mortgage principal and interest, property taxes and heating costs, plus all other debt obligations such as car payments, personal loans, or credit card debt. To qualify for a mortgage, it is recommended that the borrower’s TDS ratio not exceed 40%.',
      },
      {
        term: 'Townhouse',
        definition: 'One of several similar single-family homes that are joined side by side and share common walls.',
      },
      {
        term: 'Universal design',
        definition: 'An approach to housing that encourages the design and construction of homes that can be easily and inexpensively modified to keep pace with changes in the needs, mobility, or lifestyle of the occupants.',
      },
      {
        term: 'Variable interest rate mortgage',
        definition: 'A mortgage where the interest rate fluctuates based on the current market conditions. The payments will generally remain the same, but the amount of each payment that goes toward the principal or the interest on the loan changes as interest rates fluctuate.',
      },
      {
        term: 'Vendor',
        definition: 'The seller of a property.',
      },
      {
        term: 'Vendor take-back mortgage',
        definition: 'A type of mortgage where the seller, not a bank or other financial institution, finances the mortgage loan for the buyer.',
      },
  ];
  
  export default glossaryData;