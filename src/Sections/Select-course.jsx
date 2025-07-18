import { Box, Button, Select, Text } from '@mantine/core';
import { useState } from 'react';

const Selectcourse = ({ onAddCourse }) => {
  const [selectedCourse, setSelectedCourse] = useState('');

  const handleAddCourse = () => {
    if (!selectedCourse) return;

    const courseData = {
      name: selectedCourse,
      amount: 'NGN150,800', // You can customize this if needed
      programType: 'Accelerator', // Same here
    };

    onAddCourse(courseData);
    setSelectedCourse(''); // Reset selection
  };

  return (
    <Box className="flex flex-col items-start gap-3.5 mt-8">
      <Text className='!text-gray-900 !text-[16px] !font-normal'>Select Course</Text>
      <Select
        checkIconPosition="right"
        size='lg'
        className='w-full placeholder:text-[16px] placeholder:text-gray-900'
        placeholder="Select an option"
        data={[
          'Frontend Engineering',
          'Backend Engineering',
          'UI/UX',
          'Data Analysis',
          'Cybersecurity',
          'Mobile & PC Video Editing'
        ]}
        searchable
        variant='filled'
        value={selectedCourse}
        onChange={setSelectedCourse}
      />
      <Button
        variant="filled"
        color="#FFD700"
        className='mt-9 !text-[#181A1D] !text-[14px] !font-normal'
        onClick={handleAddCourse}
      >
        Add Course
      </Button>
    </Box>
  );
};

export default Selectcourse;
