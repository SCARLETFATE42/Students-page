// TransactionInfo.jsx
import React from 'react';
import { Card, Text, Box, Title, Group, Notification } from '@mantine/core';
import { IconCreditCard, IconCheck } from '@tabler/icons-react';

function TransactionInfo({ transaction, show}) {
  if (!show || !transaction) {
    return (
      <Card withBorder p="lg" radius="md" h="548px" w={'360px'}>
        <Title order={4} className='text-center !text-[#0F1729] !text-[22.875px] !font-bold'>
          Transaction Information
        </Title>
        <Text className='text-center'>Details about the selected transaction</Text>
        <img src="/payme.svg" alt="credit card" className='w-8 h-8 mx-auto opacity-[0.5] mt-[22px]' />
        <Box className='w-[195px] mx-auto text-[#65758B] text-center text-[15.75px] font-normal mt-[22px]'>
          Search for a transaction to view details
        </Box>
      </Card>
    );
  }

  return (
    <Card
      withBorder
      p="lg"
      radius="md"
      h="548px"
      w={'360px'}
      className="bg-white flex flex-col justify-between"
    >
      <Box>
        <Title order={4} className='text-[#0F1729] text-[22.875px] font-bold text-center'>
          Transaction Information
        </Title>
        <Text className='text-center text-[#65758B] text-[14px]'>
          Details about the selected transaction
        </Text>

        <Box className="flex justify-center mt-5">
          <Box className="bg-[#FFE454] rounded-full w-16 h-16 flex items-center justify-center">
            <IconCreditCard size={32} color="#343840" />
          </Box>
        </Box>

                <Box
            mt="md"
            className="flex flex-col gap-[10px] text-[14px] text-[#0F1729]"
            style={{ width: '259.98px' }}
            >
            {[
                ['Transaction ID:', transaction.id || '—'],
                ['Student:', transaction.student || '—'],
                ['Course:', transaction.course || '—'],
                ['Amount:', transaction.amount || '—'],
                ['Payment Date:', transaction.date || '—'],
                ['Payment Method:', transaction.method || '—'],
            ].map(([label, value], index) => (
                <Box
                key={index}
                className="flex justify-between items-end gap-2.5"
                >
                <Text className="font-medium">{label}</Text>
                <Text>{value}</Text>
                </Box>
            ))}
            </Box>


      </Box>

      <Box className="-mt-10 text-[#65758B] text-[14px] text-center border-t -pt-4">
        Transaction {transaction.id || '—'} is eligible for refund
      </Box>
    </Card>
  );
}

export default TransactionInfo;
