import { Box, Text } from "@mantine/core";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box className="flex flex-col items-start justify-start px-8 py-6 border-r-2 border-[#0000001a] w-[347px] h-[100vh] fixed bg-white">
      <Box className="w-full h-8 mb-8">
        <img src="/Nepsix.svg" alt="Nepsix Logo" />
      </Box>

      <Box className="flex flex-col gap-4 mt-[61px]">
        <Text className="text-[#00000066] text-[14px]">DashBoards</Text>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/pie-chart.svg" alt="" className="w-5 h-5" />
            Overview
          </Text>
        </a>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/mortarboard.svg" alt="" className="w-5 h-5" />
            Admission
          </Text>
        </a>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/student.svg" alt="" className="w-5 h-5" />
            Students
          </Text>
        </a>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/mentoring.svg" alt="" className="w-5 h-5" />
            Instructons
          </Text>
        </a>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/library.svg" alt="" className="w-5 h-5" />
            Course Management
          </Text>
        </a>

          <Link to="/payments">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3 cursor-pointer">
            <img src="/credit-card-pos.svg" alt="" className="w-5 h-5" />
            Payments
          </Text>
        </Link>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/discover-circle.svg" alt="" className="w-5 h-5" />
            Reports & Analytics
          </Text>
        </a>

        <a href="">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3">
            <img src="/message-multiple-0.svg" alt="" className="w-5 h-5" />
            Support & Community
          </Text>
        </a>
        <Link to="/assessments">
          <Text className="text-[#000] text-[24px] flex items-center gap-2 py-3 cursor-pointer">
            <img src="/message-multiple-0.svg" alt="" className="w-5 h-5" />
            Assessments
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
