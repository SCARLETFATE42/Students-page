import { Box, Text } from "@mantine/core"

const StudentProfile = () => {
  return (
   <>
        <Box className="flex items-center justify-between gap-4 bg-white py-6 px-6 rounded-sm">
            <Box className="flex items-center gap-3">
                <Box className="w-20 h-20 bg-[#00000066] rounded-full"></Box>
                <Text className="!font-semibold !text-[18px]">Oluchi Kanu<br /><Text className="!font-normal !text-[13px] !text-[#54585d]">Student ID: #875499 . Front End Development</Text></Text>
            </Box>
            <Box className="flex items-center gap-4">
                <button className="flex items-center gap-2 py-[13px] px-3 border border-[#c2c3c6] rounded-[6px] cursor-pointer"><img src="/message-multiple-0.svg" alt="message" className="w-5 h-5" /> Chat Support</button>
                <button className="flex items-center gap-2 py-[13px] px-3 border border-[#f77a4a] rounded-[6px] text-[#f77a4a] cursor-pointer">Disable account</button>
            </Box>
        </Box>
        
   </>
  )
}

export default StudentProfile
