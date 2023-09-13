import React from 'react';
import { FormControl, FormLabel, Input, Select, Box, Textarea, Text} from '@chakra-ui/react';

function AssetsForm() {
    return (
        <Box mt="5">
            <FormControl mt="3">
        <FormLabel>Cash</FormLabel>
        <Input placeholder="e.g., $5,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Stocks</FormLabel>
        <Input placeholder="e.g., $10,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>GICs</FormLabel>
        <Input placeholder="e.g., $15,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Cottage</FormLabel>
        <Input placeholder="e.g., $150,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>RSPs</FormLabel>
        <Input placeholder="e.g., $20,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Bonds</FormLabel>
        <Input placeholder="e.g., $8,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>House</FormLabel>
        <Input placeholder="e.g., $300,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Boat(s)</FormLabel>
        <Input placeholder="e.g., $50,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Cars</FormLabel>
      </FormControl>
      <FormControl mt="2">
        <FormLabel htmlFor="year">Year:</FormLabel>
        <Input id="year" placeholder="e.g., 2020" />
      </FormControl>
      <FormControl mt="2">
        <FormLabel htmlFor="make">Make:</FormLabel>
        <Input id="make" placeholder="e.g., Toyota" />
      </FormControl>
      <FormControl mt="2">
        <FormLabel htmlFor="model">Model:</FormLabel>
        <Input id="model" placeholder="e.g., Camry" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Any other assets not classified above? Such as a Gift to come from a relative?</FormLabel>
        <Textarea placeholder="Describe other assets here..." />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Do you own your home? If yes, when was it purchased and for how much?</FormLabel>
        <Textarea placeholder="Provide details here..." />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>What is the approximate value of your current home?</FormLabel>
        <Input placeholder="e.g., $320,000" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Please comment here as to what you intend to use for down payment and how much. (If this is a house purchase)</FormLabel>
        <Textarea placeholder="Provide details here..." />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Address of house to be purchased. (If a purchase)</FormLabel>
        <Input placeholder="e.g., 123 Main St, City, Country" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Do you have a Real Estate Listing for this house? (If a new purchase)</FormLabel>
        <Select placeholder="Choose Option">
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </Select>
      </FormControl>

      <Text mt="4" fontSize="sm">
        If yes, please forward a copy to this office.
      </Text>
    </Box>
  );
};

export default AssetsForm;