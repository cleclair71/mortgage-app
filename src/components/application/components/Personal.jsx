import {
    Box,
    Input,
    FormLabel,
    Radio,
    RadioGroup,

    FormControl,
    Select,

} from "@chakra-ui/react";

const PersonalInformation = () => {
    return (

        <Box mt="5">         
            

                <FormLabel>Prefix</FormLabel>
                <RadioGroup defaultValue="Mr">
                    <Radio value="Mr">Mr</Radio>
                    <Radio value="Ms">Ms</Radio>
                </RadioGroup>

                <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input placeholder="First Name" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input placeholder="Last Name" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Date of Birth - Month/Day/Year</FormLabel>
                    <Input placeholder="MM/DD/YYYY" type="date" />
                </FormControl>
                <FormControl>
                    <FormLabel>Marital Status</FormLabel>
                    <Select placeholder="Choose Option">
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Address</FormLabel>
                    <Input placeholder="Address" />
                </FormControl>

                <FormControl isRequired mt="3">
                    <FormLabel>City</FormLabel>
                    <Input placeholder="City" />
                </FormControl>

                <FormControl isRequired mt="3">
                    <FormLabel>Postal Code</FormLabel>
                    <Input placeholder="Postal Code" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>How Long at current address?</FormLabel>
                    <Input placeholder="e.g., 2 years" />
                </FormControl>


                <FormControl isRequired mt="3">
                    <FormLabel>Email</FormLabel>
                    <Input placeholder="Email" type="email" />
                </FormControl>


                <FormControl isRequired mt="3">
                    <FormLabel>Phone #</FormLabel>
                    <Input placeholder="Phone #" type="tel" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Previous Address</FormLabel>
                    <Input placeholder="Previous Address" />
                </FormControl>
                <FormControl mt="3">
                    <FormLabel>Previous City</FormLabel>
                    <Input placeholder="Previous City" />
                </FormControl>
                <FormControl mt="3">
                    <FormLabel>How Long at previous address?</FormLabel>
                    <Input placeholder="e.g., 3 years" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>S.I.N #</FormLabel>
                    <Input placeholder="S.I.N #" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Business #</FormLabel>
                    <Input placeholder="Business #" />
                </FormControl>


                <FormControl mt="3">
                    <FormLabel>Cell #</FormLabel>
                    <Input placeholder="Cell #" type="tel" />
                </FormControl>




                <FormControl mt="3">
                    <FormLabel>Current Employer</FormLabel>
                    <Input placeholder="Current Employer" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>How Long?</FormLabel>
                    <Input placeholder="e.g., 5 years" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Business Address</FormLabel>
                    <Input placeholder="Business Address" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Current Position</FormLabel>
                    <Input placeholder="Current Position" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Are you on:</FormLabel>
                    <Select placeholder="Choose Option">
                        <option value="hourly">Hourly</option>
                        <option value="salary">Salary</option>
                    </Select>
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>If hourly, what is your hourly rate:</FormLabel>
                    <Input placeholder="e.g., $25/hour" type="number" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Number of hours per week:</FormLabel>
                    <Input placeholder="e.g., 40 hours" type="number" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>If Salary, what is your income:</FormLabel>
                    <Input placeholder="e.g., $60,000" type="number" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Are you Full-time or Part-time?</FormLabel>
                    <Select placeholder="Choose Option">
                        <option value="full-time">Full-time</option>
                        <option value="part-time">Part-time</option>
                    </Select>
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Previous Employer</FormLabel>
                    <Input placeholder="Previous Employer" />
                </FormControl>

                <FormControl mt="3">
                    <FormLabel>Previous Employer Address</FormLabel>
                    <Input placeholder="Previous Employer Address" />
                </FormControl>
            </Box>
    );
}


export default PersonalInformation;

