import { Box, Divider, List, ListItem, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import StudentProfile from "./StudentProfile";
import QuizDetails from "../Sections/Quiz";

const ViewedDetailed = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        className="flex items-center gap-1 cursor-pointer mb-4"
        onClick={() => navigate(-1)}  
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        <Text>Back</Text>
      </Box>

        <Box className="flex flex-col items-start gap-4 bg-white p-6 rounded-sm mt-4">
                <Text className="!font-medium !text-[31px] !text-gray-900">Assessment 1</Text>
                <Text className="!font-normal !text-[13px] !text-gray-700 flex gap-1">Submitted Aug 03, 2024<p>.</p>
                <Text className="!font-normal !text-[13px] !text-gray-700 flex items-center gap-1">
                    <img src="/Clock.svg" alt="" className="w-4 h-4" />25 min</Text><p>.</p>
                    <Text className="!font-normal !text-[13px] !text-gray-700 flex items-center">
                    <img src="/Clock.svg" alt="" className="w-4 h-4" />20 questions</Text></Text>
                    <Divider my="md" className="w-full mt-8" />
            <Box className="flex items-center justify-between w-[85%]">
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Score</Text>
                    <Text className="!font-medium !text-[20px]">65</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Grade</Text>
                    <Text className="!font-medium !text-[20px]">B</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Total question Answered</Text>
                    <Text className="!font-medium !text-[20px]">19/20</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Total question Answered</Text>
                    <Text className="!font-medium !text-[20px]">12</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Total question failed</Text>
                    <Text className="!font-medium !text-[20px]">12</Text>
               </Box>
            </Box>
        </Box>
    
      <QuizDetails />

         <Box className="flex flex-col items-start gap-4 bg-white p-6 rounded-sm mt-4 mb-10">
            <Box className="flex items-center justify-between w-full">
                <Box className="flex flex-col items-start gap-2">
                <Text className="!font-medium !text-[31px] !text-gray-900">Assessment 2</Text>
                <Text className="!font-normal !text-[13px] !text-gray-700 flex gap-1">Submitted Aug 03, 2024<p>.</p>
                <Text className="!font-normal !text-[13px] !text-gray-700 flex items-center gap-1">
                    <img src="/Clock.svg" alt="" className="w-4 h-4" />25 min</Text><p>.</p>
                    <button className="bg-[#274c771a] rounded-full w-[82px] py-[5px] px-[9px] flex items-center !text-[#274c77] !font-normal !text-[12px]">Not Graded</button></Text>
                </Box>
                <Box className="bg-[#ffd700] py-4 px-6 rounded-[2px]">
                    <button className="!font-medium !text-[16px] cursor-pointer">Grade assessment</button>
                </Box>
            </Box>
                    <Divider my="md" className="w-full mt-8" />
            <Box className="flex items-center justify-between w-[85%]">
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Score</Text>
                    <Text className="!font-medium !text-[20px]">0</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Grade</Text>
                    <Text className="!font-medium !text-[20px]">Null</Text>
               </Box>
               <Box className="flex flex-col gap-2">
                    <Text className="!font-normal !text-[16px] !text-gray-500">Score Breakdown</Text>
                    <Text className="!font-medium !text-[20px]">Null</Text>
               </Box>
            </Box>
        </Box>
        
        <Box className="flex flex-col items-start gap-4 bg-white p-6 rounded-[2px] mt-4 mb-10">
            <Text className="!font-medium !text-[20px] !text-center">Questions</Text>
            
           <ul className="flex flex-col gap-4 mt-11">
      <li className="flex gap-2">
        1.
        <ol>
          <li className="font-normal text-[16px]">It gives you a huge self-satisfaction when you look at your work and say, "I made this!". I love that feeling after I'm done working on something. When I lean back in my chair,  look at the final result with a smile, and have this little "spark joy" moment. It's especially satisfying when I know I just made $5,000.</li>
        </ol>
      </li>
      <li className="flex gap-2">
        2.
        <ol>
          <li className="font-normal text-[16px]">I do! And that's why I got into this field. 
            Not for the love of Web Design, which I do now. But for the LIFESTYLE! 
            There are many ways one can achieve this lifestyle. This is my way. 
            This is how I achieved a lifestyle I've been fantasizing about for five years.
             And I'm going to teach you the same. 
            Often people think Web Design is complicated. </li>
        </ol>
      </li>
    </ul>
    <Divider my="md" className="w-full m-8" />
        <Box>
           <Text className="!font-medium !text-[31px] !text-gray-900">Submission link</Text> 
           <Box className="!font-normal !text-[13px] !text-gray-700 w-[611px] py-3.5 px-4 rounded-[8px] border border-[#c2c3c6] mt-5 ">
            <a href="https://www.figma.com/design/jzPURWf2AFEGh4uL9ibEfz/my-nepsix?node-id=199-8327&t=t7Az0dvAkGw58vCU-0" className="flex items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" className="mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link-icon lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            https://www.figma.com/design/jzPURWf2AFEGh4uL9ibEfz/my-nepsix?node-id=199-8327&t=t7Az0dvAkGw58vCU-0
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right">
            <path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg></a>
           
           </Box>
        </Box>
        </Box>
    </>
  );
};

export default ViewedDetailed;
