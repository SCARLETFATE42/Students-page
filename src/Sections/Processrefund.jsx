import React, { useState, useEffect } from 'react';
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
import { DateInput } from '@mantine/dates';
import dayjs from 'dayjs';
import TransactionInfo from './TransactionInfo';

function ProcessRefund({ prefillName = '', prefillProgram = '' }) {
  const [refundType, setRefundType] = useState('Full Refund');
  const [transactionId, setTransactionId] = useState('');
  const [showTransactionInfo, setShowTransactionInfo] = useState(false);
  const [refundSuccess, setRefundSuccess] = useState(false);
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(null);
  const [method, setMethod] = useState('');

  const labelStyle = {
    label: '!text-[#0F1729] !text-[14px] !font-medium',
  };

  const handleApplyFilter = () => {
    setShowTransactionInfo(true);
  };

  const transactionData = {
    id: transactionId,
    student: prefillName,
    course: prefillProgram,
    amount,
    date: date ? dayjs(date).format('MMM D, YYYY') : '—',
    method,
  };

  useEffect(() => {
    if (refundSuccess) {
      const timer = setTimeout(() => setRefundSuccess(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [refundSuccess]);

  return (
    <Stack gap={32}>
      <Box
        p="24"
        mt={28}
        className="bg-white w-[1165px] min-w-[400px] h-[auto] rounded-3xl drop-shadow-[0px_1px_0px_0px_#181A1D] gap-8 mb-7"
      >
        <Title order={2}>Process Refund</Title>
        <Text color="dimmed" mt={4} mb={32}>
          Define a new subscription plan for your courses.
        </Text>

        <Box className="flex justify-between items-center mt-[54px]">
          <Grid gutter="xl">
            <Box className="w-[737px]">
              <Grid.Col md={8}>
                <Card withBorder p="lg" radius="md">
                  <Title order={4}>Refund Details</Title>
                  <Text size="sm" color="dimmed" mb="24px">
                    Enter the transaction details and refund amount.
                  </Text>

                  <Group mb="32px" justify="space-between">
                    <Box className="flex gap-3">
                      <TextInput
                        variant="filled"
                        label="Transaction ID"
                        placeholder="e.g., PAY-123456"
                        value={transactionId}
                        onChange={(e) => setTransactionId(e.target.value)}
                        className="w-[250px]"
                        classNames={labelStyle}
                      />
                      <Button
                        variant="filled"
                        color="#FFF3B0"
                        mt={22}
                        py={2}
                        px={10}
                        className="!text-[#1D2739] !text-[13px] !font-normal"
                        onClick={handleApplyFilter}
                      >
                        Apply Filter
                      </Button>
                    </Box>

                    <Select
                      label="Refund Type"
                      data={["Full Refund", "Partial Refund"]}
                      value={refundType}
                      variant="filled"
                      onChange={setRefundType}
                      className="!text-[#0F1729] !text-[14px] !font-medium"
                    />
                  </Group>

                  <TextInput
                    label="Refund Amount"
                    placeholder="$0.00"
                    value={amount}
                    variant="filled"
                    onChange={(e) => setAmount(e.target.value)}
                    classNames={labelStyle}
                    mb="8px"
                  />
                  <Text size="xs" color="dimmed" mb="24px">
                    This will refund the full amount of the transaction.
                  </Text>

                  <DateInput
                    label="Payment Date"
                    placeholder="Pick a date"
                    value={date}
                    onChange={setDate}
                    classNames={labelStyle}
                    variant="filled"
                    mb="md"
                  />

                  <TextInput
                    label="Payment Method"
                    placeholder="e.g. Visa **** 4242"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    classNames={labelStyle}
                    mb="md"
                  />

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

                  <Group mb={32} justify="flex-end">
                    <Button
                      variant="default"
                      className="!text-[#1D2739] !text-[14px] !font-medium"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={() => setRefundSuccess(true)}
                      color="#FFD700"
                      className="!text-[#1D2739] !text-[14px] !font-medium"
                    >
                      Process Refund
                    </Button>
                  </Group>
                </Card>
              </Grid.Col>
            </Box>

            <Box className="w-[360px]">
              <Grid.Col md={4} className="h-full w-[360px]">
                <TransactionInfo
                  transaction={transactionData}
                  show={showTransactionInfo}
                />
              </Grid.Col>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* ✅ Floating Refund Notification */}
      <div
        className={`fixed bottom-6 right-6 w-[285px] px-4 py-2 rounded-lg border border-[#EBECED] bg-white shadow transition-all duration-500 ease-in-out
          ${refundSuccess ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <Text className="text-green-600 font-semibold text-[16px] mb-1">
        success
        </Text>
        <Text className="text-[#181A1D] font-medium text-sm">
        Refund was processed successfully.
        </Text>
      </div>
    </Stack>
  );
}

export default ProcessRefund;
