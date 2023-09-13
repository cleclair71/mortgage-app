import React from 'react';
import { FormControl, FormLabel, Input, Select, Box, Grid } from '@chakra-ui/react';

function LiabilitiesForm() {
    return (
        <Box mt="5">
            <Grid templateColumns="1fr 1fr 1fr" gap={4}>
        <FormControl>
          <FormLabel>Institution</FormLabel>
          <Input placeholder="e.g., Bank XYZ" />
          <Input />
          <Input />
          <Input />
        </FormControl>
        <FormControl>
          <FormLabel>Payment Amount</FormLabel>
          <Input placeholder="e.g., $200" type="number" />
          <Input /><Input /><Input />
        </FormControl>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <Input placeholder="e.g., $5,000" type="number" />
          <Input /><Input /><Input />
        </FormControl>

        {/* You can repeat the above three columns three more times for a total of four rows */}
      </Grid>

      {/* Loans */}
      <h3>Loans:</h3>
      <Grid templateColumns="1fr 1fr 1fr" gap={4}>
        <FormControl>
          <FormLabel>Institution</FormLabel>
          <Input placeholder="e.g., Lender ABC" />
          <Input /><Input /><Input />
        </FormControl>
        <FormControl>
          <FormLabel>Payment Amount</FormLabel>
          <Input placeholder="e.g., $250" type="number" /> <Input /><Input /><Input />
        </FormControl>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <Input placeholder="e.g., $10,000" type="number" /><Input /><Input /><Input />
        </FormControl>

        {/* Repeat for three more rows */}
      </Grid>

      {/* Leases */}
      <h3>Leases:</h3>
      <Grid templateColumns="1fr 1fr 1fr" gap={4}>
        <FormControl>
          <FormLabel>Institution</FormLabel>
          <Input placeholder="e.g., Leasing Co." /><Input /><Input /><Input />
        </FormControl>
        <FormControl>
          <FormLabel>Payment Amount</FormLabel>
          <Input placeholder="e.g., $300" type="number" /><Input /><Input /><Input />
        </FormControl>
        <FormControl>
          <FormLabel>Balance</FormLabel>
          <Input placeholder="e.g., $12,000" type="number" /><Input /><Input /><Input />
        </FormControl>

        {/* Repeat for three more rows */}
      </Grid>

      <FormControl mt="3">
        <FormLabel>How much is your current rent?</FormLabel>
        <Input placeholder="e.g., $1,500" type="number" />
      </FormControl>

      <FormControl mt="3">
        <FormLabel>Do you pay or receive child support? If yes, what do you pay/receive monthly?</FormLabel>
        <Input placeholder="e.g., Pay $500" />
      </FormControl>
    </Box>
  );
};

export default LiabilitiesForm;

