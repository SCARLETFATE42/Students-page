import React from 'react';
import { Box, Text, Modal } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import Modalpopup from '../Sections/Modalpopup';

const StudentProfile = () => {
//   const [ { open} ] = useDisclosure(false);

  return (
    <>
      {/* Profile Header */}
      <Box className="flex items-center justify-between gap-4 bg-white py-6 px-6 rounded-sm">
        <Box className="flex items-center gap-3">
          <Box className="w-20 h-20 bg-[#00000066] rounded-full"></Box>
          <Text className="!font-semibold !text-[18px]">
            Oluchi Kanu
            <br />
            <Text className="!font-normal !text-[13px] !text-[#54585d]">
              Student ID: #875499 . Front End Development
            </Text>
          </Text>
        </Box>

        <Box className="flex items-center gap-4">
          {/* Chat Support Button */}
            <Modalpopup />

          {/* Disable Account Button */}
          <button className="flex items-center gap-2 py-[13px] px-3 border border-[#f77a4a] rounded-[6px] text-[#f77a4a] cursor-pointer">
            Disable account
          </button>
        </Box>
      </Box>
   
      {/* Chat Support Modal */}
      
    </>
  );
};

export default StudentProfile;
