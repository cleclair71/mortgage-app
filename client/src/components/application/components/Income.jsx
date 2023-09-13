import React from 'react';
import { FormControl, FormLabel, Input, Select, Box, Text } from '@chakra-ui/react';

function IncomeForm() {
    return (
        <Box mt="5">
             <FormControl mt="3">
        <FormLabel>What did you each earn in gross income last year?</FormLabel>
        <FormControl mt="2">
          <FormLabel htmlFor="applicant-last-year">Applicant:</FormLabel>
          <Input id="applicant-last-year" placeholder="e.g., $55,000" type="number" />
        </FormControl>
        <FormControl mt="2">
          <FormLabel htmlFor="coapplicant-last-year">Co-Applicant:</FormLabel>
          <Input id="coapplicant-last-year" placeholder="e.g., $60,000" type="number" />
        </FormControl>
      </FormControl>

      <FormControl mt="3">
        <FormLabel>What will you each earn in gross income this year?</FormLabel>
        <FormControl mt="2">
          <FormLabel htmlFor="applicant-this-year">Applicant:</FormLabel>
          <Input id="applicant-this-year" placeholder="e.g., $57,000" type="number" />
        </FormControl>
        <FormControl mt="2">
          <FormLabel htmlFor="coapplicant-this-year">Co-Applicant:</FormLabel>
          <Input id="coapplicant-this-year" placeholder="e.g., $62,000" type="number" />
        </FormControl>
      </FormControl>

      <Text mt="4" fontSize="sm">
        Note: If commission or self-employed, we average your last three years of earnings. Please forward copies of your last three years Notice of Assessments from Revenue Canada.
      </Text>
    </Box>
  );
};

export default IncomeForm;