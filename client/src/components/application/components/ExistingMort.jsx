import React from 'react';
import { FormControl, FormLabel, Input, Select, Box, Grid } from '@chakra-ui/react';

const ExistingMortgagesForm = () => {
    return (
        <Box mt="5">
            <FormControl mt="3">
                <FormLabel>Company Name</FormLabel>
                <Input placeholder="e.g., Mortgage Corp." />
            </FormControl>

            <FormControl mt="3">
                <FormLabel>Current Payments</FormLabel>
                <Input placeholder="e.g., $1,000" type="number" />
            </FormControl>

            <FormControl mt="3">
                <FormLabel>Outstanding Amount</FormLabel>
                <Input placeholder="e.g., $200,000" type="number" />
            </FormControl>

            <FormControl mt="3">
                <FormLabel>Maturity Date</FormLabel>
                <Input type="date" />
            </FormControl>
        </Box>
    );
};

export default ExistingMortgagesForm;