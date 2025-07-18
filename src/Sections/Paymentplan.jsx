import React, { useState } from 'react';
import {
  Box,
  Text,
  Title,
  Button,
  Switch,
  Group,
  Card,
  Stack,
  Modal,
} from '@mantine/core';
import Selectcourse from './Select-course';

function PaymentPlan() {
  const [active, setActive] = useState(true);
  const [modalOpened, setModalOpened] = useState(false);
  const [courses, setCourses] = useState([
    {
      name: 'Organic Chemistry',
      amount: 'NGN150,800',
      programType: 'Accelerator',
    },
    {
      name: 'Organic Chemistry',
      amount: 'NGN150,800',
      programType: 'Accelerator',
    },
    {
      name: 'Organic Chemistry',
      amount: 'NGN150,800',
      programType: 'Accelerator',
    },
    {
      name: 'Organic Chemistry',
      amount: 'NGN150,800',
      programType: 'Accelerator',
    },
    {
      name: 'Organic Chemistry',
      amount: 'NGN150,800',
      programType: 'Accelerator',
    },
  ]);

  const handleRemoveCourse = (index) => {
    setCourses(courses.filter((_, i) => i !== index));
  };

  return (
    <Box className="px-8 py-8 mx-[27px] bg-[#FFF] rounded-[8px]">

      {/* Modal */}
      <Stack spacing={32}  p={24}>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        title={<Text className="!text-[24px] !font-semibold">Add course</Text>}
        centered
        size={670}
        styles={{
            content: { minWidth: '400px' },
        }}
       
      >
        {/* Your form goes here */}
          <Selectcourse
    onAddCourse={(newCourse) => {
      setCourses((prev) => [...prev, newCourse]);
      setModalOpened(false);
    }}
  />
      </Modal>
      </Stack>

      {/* Plan Title & Status */}
      <Title className="!mb-[23px] !text-[#181A1D] text-2xl !font-normal">
        Payment plan
      </Title>

      <Box className="bg-white border p-[17px] mb-8 flex justify-between items-center max-w-[742px] rounded-[8px] border-[#E1E7EF] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
        <Box>
          <Text className="!font-semibold !text-2xl !text-[#0F1729] mb-1">
            Premium Plan
          </Text>
          <Text className="!text-[15.8px] !text-[#65758B] !font-normal">
            Accelerator | Monthly
          </Text>
        </Box>
        <Box className="flex flex-col w-[368px] py-[17px] px-[16px] rounded-[8px]">
          <Box className="flex justify-between items-center">
            <Text className='!font-normal !text-[16px] !text-[#0F1729]'>Active Status</Text>
            <Switch
              size="md"
              checked={active}
              onChange={() => setActive((v) => !v)}
              color="#6B5A00"
            />
          </Box>
          <Text className="!text-sm !text-[#65758B] !font-normal mt-1">
            Make this plan available for purchase
          </Text>
        </Box>
      </Box>

      {/* Course List */}
      <Group className="mb-4 flex items-center !justify-between">
        <Title order={4} className="!text-[#181A1D] !text-[20px] !font-medium">Courses</Title>
        <Button
          className="!bg-[#FFD700] !text-black !text-sm !font-normal !pl-[10.172px] pr-[10.828px] flex justify-center items-center !py-2.5 rounded"
          onClick={() => setModalOpened(true)}
        >
          Add course
        </Button>
      </Group>

      <Stack gap={16}>
        {courses.map((course, index) => (
          <Card
            key={index}
            withBorder
            radius="md"
            className="flex px-6 py-4 border-[#E5E7EB]"
          >
            <Box className="!flex !items-center !justify-between gap-12">
              <Box>
                <Text className="!text-[12px] !text-[#65758B] mb-1 !font-normal">
                  Course name
                </Text>
                <Text className="!text-[16px] !font-normal !text-[#0F1729]">
                  {course.name}
                </Text>
              </Box>
              <Box>
                <Text className="!text-[12px] !text-[#65758B] mb-1 !font-normal">
                  Amount
                </Text>
                <Text className="!text-[16px] !font-normal !text-[#0F1729]">
                  {course.amount}
                </Text>
              </Box>
              <Box>
                <Text className="!text-[12px] !text-[#65758B] mb-1 !font-normal">
                  Program Type
                </Text>
                <Text className="!text-[16px] !font-normal !text-[#0F1729]">
                  {course.programType}
                </Text>
              </Box>
              <Button
                variant="filled"
                color="#F8FAFC"
                className="flex items-center justify-center !text-center !text-[#0F1729] !p-2  border !border-[#E1E7EF] !text-[13.891px] font-medium rounded-[6px]"
                onClick={() => handleRemoveCourse(index)}
              >
                Remove Course
              </Button>
            </Box>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}

export default PaymentPlan;
