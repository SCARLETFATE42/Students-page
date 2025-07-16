import React, { useState, useEffect } from "react";
import {
  TextInput,
  Select,
  Button,
  Box,
  Title,
  Text,
  Stack,
  Container,
} from "@mantine/core";
import ProcessRefund from "./Processrefund";

const CreatePaymentPlan = () => {
  const [programType, setProgramType] = useState("");
  const [showNotification, setShowNotification] = useState(false);

  const handleCreate = () => {
    if (programType) {
      setShowNotification(true);
    }
  };

  // Auto-hide notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => setShowNotification(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <>
      {/* Notification - Positioned absolutely in bottom-right */}
      <div
        className={`fixed bottom-6 right-6 w-[314px] h-[96px] px-4 py-2 rounded-lg border border-[#EBECED] bg-white shadow transition-all duration-500 ease-in-out
        ${showNotification ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <Text className="text-black text-[16px] font-semibold">Plan created</Text>
        <Text className="text-[#181A1D] font-medium text-sm mt-2">
          Subscription plan "{programType || '[No Program Selected]'}" has been created
        </Text>
      </div>

      {/* Form */}
      <Container
        size="1165px"
        mt="28"
        p="24"
        className="bg-white h-[707px] rounded-3xl min-w-[400px] drop-shadow-[0px_1px_0px_0px_#181A1D] gap-8"
      >
        <Box mb="md">
          <Title
            order={2}
            fw={700}
            className="!text-[#0F1729] !text-[23.25px]"
          >
            Create Payment Plan
          </Title>
          <Text
            c="dimmed"
            size="sm"
            className="!text-[#65758B] !text-[15.75px] !font-normal"
          >
            Define a new subscription plan for your courses.
          </Text>
        </Box>

        <Stack spacing={14} gap={24} p="16" className="ml-6">
          <TextInput
            label="Name"
            placeholder="Enter name"
            required
            variant="filled"
            className="rounded-[6px]"
            withAsterisk
          />
          <Select
            label="Program type"
            placeholder="Select an option"
            data={["Program A", "Program B", "Program C"]}
            value={programType}
            onChange={setProgramType}
          />
          <Select
            label="Select payment type"
            placeholder="Select an option"
            data={["Monthly", "Quarterly", "Yearly"]}
          />
          <TextInput
            label="Name"
            placeholder="Enter name"
            variant="filled"
            required
            withAsterisk
          />
          <Button
            variant="filled"
            color="#FFD700"
            onClick={handleCreate}
            className="flex justify-center items-center !text-[#181A1D]"
            style={{
              width: "100px",
              height: "40px",
              borderRadius: "6px",
              padding: "10px 8.172px 10px 8.828px",
            }}
          >
            Create Plan
          </Button>
        </Stack>
      </Container>
      <ProcessRefund />
    </>
  );
};

export default CreatePaymentPlan;
