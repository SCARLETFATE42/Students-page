// ProcessRefund.jsx

import React, { useState } from 'react';
import {
  Button,
  Card,
  Text,
  TextInput,
  Textarea,
  Select,
  Grid,
  Title,
  Box,
  Group,
  Stack,
} from '@mantine/core';

function ProcessRefund() {
  const [refundType, setRefundType] = useState('Full Refund');

   const labelStyle = {
    label: '!text-[#0F1729] !text-[14px] !font-medium',
  };

  return (
    <Stack gap={32}>
      <Box p="24" mt={28} className='bg-white w-[1165px] min-w-[400px] h-[707px] rounded-3xl drop-shadow-[0px_1px_0px_0px_#181A1D] gap-8 mb-7'>
        <Title order={2}>Process Refund</Title>
        <Text color="dimmed" mt={4} mb={32}>
          Define a new subscription plan for your courses.
        </Text>
        <Box className='flex justify-between items-center mt-[54px]'>
      <Grid gutter="xl">
        {/* Refund Details */}
        <Box className='w-[737px] h-[548px]'>
        <Grid.Col md={8}>
          <Card withBorder p="lg" radius="md">
            <Title order={4}>
              Refund Details
            </Title>
            <Text size="sm" color="dimmed" mb="24px">
              Enter the transaction details and refund amount.
            </Text>

            <Group mb="32px" justify='space-between'>
                <Box className='flex gap-3'>
              <TextInput variant='filled' label="Transaction ID" placeholder="e.g., PAY-123456" className='w-[250px]' classNames={labelStyle} />
              <Button variant="filled" color="#FFF3B0" mt={22} py={2} px={10} className='!text-[#1D2739] !text-[13px] !font-normal'>
                Apply Filter
              </Button>
                </Box>

            <Select
              label="Refund Type"
              data={['Full Refund', 'Partial Refund']}
              value={refundType}
              variant='filled'
              onChange={setRefundType}
              className='!text-[#0F1729] !text-[14px] !font-medium'
            />
            </Group>
            <TextInput
            label="Refund Amount"
            placeholder="$0.00"
            variant="filled"
            mb="8px"
            classNames={labelStyle}
            />
            <Text size="xs" color="dimmed" mb="24px">
                This will refund the full amount of the transaction.
            </Text>

            <Textarea
            label="Refund Reason"
            placeholder="Please provide a reason for this refund..."
            resize="vertical"
            mb="8px"
            classNames={labelStyle}
            />
            <Text size="xs" color="dimmed" mb="32px">
                This will refund the full amount of the transaction.
            </Text>


            <Group  mb={32} justify='flex-end'>
              <Button variant="default" className='!text-[#1D2739] !text-[14px] !font-medium'>Cancel</Button>
              <Button color="#FFD700" className='!text-[#1D2739] !text-[14px] !font-medium'>Process Refund</Button>
            </Group>
          </Card>
        </Grid.Col>
        </Box>

        {/* Transaction Info */}
        <Box className='w-[360px] h-[548px]'>
        <Grid.Col md={4} className='h-full w-[360px]'>
          <Card withBorder p="lg" radius="md" h="548px" w={'360px'}>
            <Title order={4}  className='text-center !text-[#0F1729] !text-[22.875px] !font-bold'>
              Transaction Information
            </Title>
            <Text className='text-center'>Details about the selected transaction</Text>
            <img src="/payme.svg" alt="credit card" className='w-8 h-8 mx-auto opacity-[0.5] mt-[22px]' />
            <Box className='w-[195px] mx-auto text-[#65758B] text-center text-[15.75px] font-normal mt-[22px]'>
                Search for a transaction to view details
            </Box>
          </Card>
        </Grid.Col>
        </Box>
      </Grid>
        </Box>
    </Box>
    </Stack>
  );
}

export default ProcessRefund;
            