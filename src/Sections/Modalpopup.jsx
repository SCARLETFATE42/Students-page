import { useDisclosure } from '@mantine/hooks';
import { Box, Button, Divider, FileInput, Input, Modal, Select, Text, Textarea } from '@mantine/core';
import { IconCalendarTime, IconPaperclip, IconSend, IconSparkles, IconTag, IconUser } from '@tabler/icons-react';

const Modalpopup = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
      size={896}
      radius={12}
      opened={opened} onClose={close} title={
        <Box className='flex flex-col items-start gap-2 p-6'>
            <Text className="!text-[18.75px] !text-[#020817] !font-semibold">Request for assignment extension</Text>
        <Text className='flex items-center justify-center !text-[#64748B] !text-[13.563px]'>Ticket #3 .<Box className='flex items-center gap-1 pt-[5px] pr-[10.8px] pb-[6px] pl-[11px] ml-[11px] rounded-full border border-[#16A249]/30 bg-[#16A249]/10 text-[#16A249] text-[12px] !font-medium'><img src="/tick.svg" alt="" className="w-4 h-4" />Resolved</Box></Text>
        </Box>} centered>
        {/* Modal content */}


        <Box className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left Panel: Message + Response */}
      <Box className="flex-1">
        {/* Message Box */}
        <Box className="rounded-[12px] h-[243.75px] p-5 mb-6 shadow-sm border border-[#E2E8F0]">
          <Box className="flex items-center gap-3 mb-2">
            <Box className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold">
              MR
            </Box>
            <Box className="flex flex-col gap-2">
              <Text className="font-medium">Miguel Rodriguez</Text>
              <Text size="sm" color="gray">miguel.r@example.com</Text>
            </Box>
          </Box>

          <Text  className="!text-[#020817] !text-[13.563px] !mt-2 !leading-[22.75px] flex justify-center">
            Due to unexpected family circumstances, I need to request an extension for the final project that's due on November 5th. I would appreciate if I could have until November 10th to complete and submit the assignment. I’ve been keeping up with all other coursework and have maintained good standing in the class. Thank you for your consideration.
          </Text>

          <Text size="xs" color="dimmed" className="!mt-4 !text-right">
            Oct 28, 2023 at 5:20 PM
          </Text>
        </Box>

        {/* Response Box */}
        <Box className="rounded-[12px] p-5 shadow-sm border border-[#E2E8F0]">
          <Box className="flex justify-between items-center mb-2">
            <Text className="!font-medium !text-[#020817]">Your response</Text>
            <Button
              variant="default"
              radius={10}
              color="#E2E8F0"
              leftSection={<IconSparkles size={16} />}
              className='py-2 px-[12.8px]'
            >
              Quick Responses
            </Button>
          </Box>

          <Textarea
            placeholder="Write your response..."
            autosize
            minRows={4}
            classNames={{ input: 'rounded-md' }}
          />

          <Box className="flex justify-between items-center mt-4">
           <FileInput
              variant='default'
              leftSection={<IconPaperclip size={16} />}
              placeholder="Attach files"
              classNames={{ input: 'rounded-[10px]' }}
            />
            <Button 
              color='#E4E7EC'
              rightSection={<IconSend size={16} />}
              className='py-2 px-[12.8px] !text-gray-700'
            >
              Send Reply
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Right Panel: Ticket Info */}
      <Box className="w-full md:w-[300px]">
        <Box className="rounded-md border-l border-l-[#E2E8F0] p-5">
          <Box className="mb-4">
            <Text className="!text-[13.781px] !text-gray-500 !mb-[17px] !font-medium">Status</Text>
            <Select
              data={['Resolved', 'Pending', 'Open']}
              defaultValue="Resolved"
              classNames={{ input: 'rounded-[19px] !text-[#020817]' }}
            />
          </Box>

          <Box className="mt-6">
            <Text className="!text-[13.781px] !text-gray-500 !mb-[17px] !font-medium">Assigned to</Text>
            <Select
              data={['Sarah Williams', 'John Doe', 'Admin']}
              defaultValue="Sarah Williams"
              classNames={{ input: 'rounded-[19px] !text-[#020817]' }}
            />
          </Box>
            <Divider my="24px" />
          <Box className="">
            <Text className='!text-[#020817] !text-[13.781px] !font-medium'>Ticket Details</Text>

            <Text className="!text-sm !text-[#64748B] !mt-[15px] !font-medium flex gap-2 items-center"><IconUser stroke={2} />Student</Text>
            <Text className="mb-3">Miguel Rodriguez</Text>

            <Text className="!text-sm !text-[#64748B] !mt-[15px] !font-medium flex gap-2 items-center">
                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.16602 13.4499V3.44987C3.16602 3.00784 3.34161 2.58392 3.65417 2.27136C3.96673 1.9588 4.39065 1.7832 4.83268 1.7832H13.166C13.3428 1.7832 13.5124 1.85344 13.6374 1.97847C13.7624 2.10349 13.8327 2.27306 13.8327 2.44987V14.4499C13.8327 14.6267 13.7624 14.7963 13.6374 14.9213C13.5124 15.0463 13.3428 15.1165 13.166 15.1165H4.83268C4.39065 15.1165 3.96673 14.9409 3.65417 14.6284C3.34161 14.3158 3.16602 13.8919 3.16602 13.4499ZM3.16602 13.4499C3.16602 13.0078 3.34161 12.5839 3.65417 12.2714C3.96673 11.9588 4.39065 11.7832 4.83268 11.7832H13.8327" stroke="#64748B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                Course</Text>
            <Text className="mb-3">Frontend Development</Text>

            <Text className="!text-sm !text-[#64748B] !mt-[15px] !font-medium flex gap-2 items-center">
                <IconTag stroke={2} />Category</Text>
            <Text className="mb-3">Course-related</Text>

            <Text className="!text-sm !text-[#64748B] !mt-[15px] !font-medium flex gap-2 items-center">
                <IconCalendarTime stroke={2} />Submitted</Text>
            <Text>Oct 28, 2023 at 5:20 PM</Text>
          </Box>
        </Box>
      </Box>
    </Box>
      </Modal>

      <button
      onClick={open} className="flex items-center gap-2 py-[13px] px-3 border border-[#c2c3c6] rounded-[6px] cursor-pointer"
      >
         <img src="/message-multiple-0.svg" alt="message"className="w-5 h-5" />
        Chat Support
      </button>
    </>
  );
};

export default Modalpopup;