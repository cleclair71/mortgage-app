import React from 'react';
import { FormControl, FormLabel, Input, Select, Box, Checkbox, CheckboxGroup } from '@chakra-ui/react';

function BankingInformationForm() {
    return (
        <Box mt="5">
            <FormControl mt="3">
        <FormLabel>Bank Name (Applicant)</FormLabel>
        <Input placeholder="Enter Bank Name" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Branch Location (Applicant)</FormLabel>
        <Input placeholder="Enter Branch Location" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Types of Accounts (Applicant)</FormLabel>
        <CheckboxGroup>
          <Checkbox value="chequing">Chequing</Checkbox>
          <Checkbox value="savings">Savings</Checkbox>
        </CheckboxGroup>
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Bank Name (Co-Applicant)</FormLabel>
        <Input placeholder="Enter Bank Name" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Branch Location (Co-Applicant)</FormLabel>
        <Input placeholder="Enter Branch Location" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Types of Accounts (Co-Applicant)</FormLabel>
        <CheckboxGroup>
          <Checkbox value="chequing">Chequing</Checkbox>
          <Checkbox value="savings">Savings</Checkbox>
        </CheckboxGroup>
      </FormControl>
        </Box>
    );
};

export default BankingInformationForm;