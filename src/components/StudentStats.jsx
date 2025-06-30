import {
  Accordion,
  Box,
  Text,
  Badge,
  Button,
  Stack,
} from "@mantine/core";
import { Link } from "react-router-dom";
import StudentProfile from "./StudentProfile";

const StudentStats = () => {
const renderItem = (
  title,
  status,
  showUnlock = false,
  icon = null,
  route = null        // ⬅️ NEW (optional) route
) => (
  <Box className="bg-white px-2 py-2 w-full">
    <Box className="flex items-center justify-between w-full">
      {/* left side  ─────────────────────────────────── */}
      <Box className="flex items-center gap-2 flex-wrap">
        <Box className="flex items-center gap-1">
          {icon && <img src={icon} alt="" className="w-4 h-4" />}
          <Text>{title}</Text>
        </Box>

        {status?.map((s, i) => (
          <Badge key={i} color={s.color} variant="light">
            {s.label}
          </Badge>
        ))}
      </Box>

      {/* right side  ────────────────────────────────── */}
      <Box className="flex items-center gap-2">
        {showUnlock && (
          <Button size="xs" variant="light" color="yellow">
            Unlock Assessment
          </Button>
        )}

        {route ? (
          /* if a route is provided wrap the button in <Link> */
          <Link to={route}>
            <Button
              size="xs"
              variant="default"
              className="bg-[#f3f6fb] flex items-center gap-1 py-2 px-4"
            >
              View details
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Button>
          </Link>
        ) : (
          /* plain button for all other rows */
          <Button
            size="xs"
            variant="default"
            className="bg-[#f3f6fb] flex items-center gap-1 py-2 px-4"
          >
            View details
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
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Button>
        )}
      </Box>
    </Box>
  </Box>
);



  return (
    <>
    <StudentProfile />
    <section className="bg-white py-6 px-6 mt-4">
      <Box className="flex items-center justify-between">
        <Text className="!font-semibold !text-[18px]">1st Month</Text>
        <Box className="flex items-center gap-4">
          <Text className="!font-normal !text-[13px] !text-[#54585d] flex items-center gap-1">
            <img src="/FolderNotchOpen.svg" alt="" /> 1st Semester
          </Text>
          <Text className="!font-normal !text-[13px] !text-[#54585d] flex items-center gap-1">
            <img src="/PlayCircle.svg" alt="" /> 202 lectures
          </Text>
          <Text className="!font-normal !text-[13px] !text-[#54585d] flex items-center gap-1">
            <img src="/Clock.svg" alt="" /> 19h 37m
          </Text>
        </Box>
      </Box>

      <Box className="mt-4">
        <Accordion chevronPosition="left" variant="separated" multiple classNames={{ item: "!bg-white !border-b-0" }}>
          <Accordion.Item value="week1">
            <Accordion.Control className="!bg-white">Week 1: Getting Started</Accordion.Control>
            <Accordion.Panel className="!p-0 !bg-white">
                    <Stack spacing={0}>
  {renderItem("What is Webflow?", [{ label: "Attended", color: "green" }], false, "/Play.svg")}
  {renderItem("Sign up in Webflow", [{ label: "Attended", color: "green" }], false, "/Play.svg")}

  {/* ⬇️  ONLY THIS ONE HAS THE route PROP */}
  {renderItem(
    "Assessment 1",
    [
      { label: "Submitted", color: "teal" },
      { label: "Graded",   color: "green" },
    ],
    true,
    "/File.svg",
    "/assessment-1"           // ← route
  )}

  {renderItem("Teaser of Webflow", [{ label: "Missed", color: "red" }], false, "/video.svg")}
  {renderItem(
    "Practice Project",
    [
      { label: "Missed",     color: "red"  },
      { label: "Not Graded", color: "gray" },
    ],
    true,
    "/File.svg"
  )}
</Stack>

            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="week2" disabled>
            <Accordion.Control className="!bg-white">Week 2: Secret of Good Design</Accordion.Control>
          </Accordion.Item>
          <Accordion.Item value="week3" disabled>
            <Accordion.Control className="!bg-white">Week 3: Practice Design Like an Artist</Accordion.Control>
          </Accordion.Item>
          <Accordion.Item value="week4" disabled>
            <Accordion.Control className="!bg-white">Week 4: Web Development (Webflow)</Accordion.Control>
          </Accordion.Item>
          <Accordion.Item value="week5" disabled>
            <Accordion.Control className="!bg-white">Week 5: Secrets of Making Money Freelancing</Accordion.Control>
          </Accordion.Item>
          <Accordion.Item value="week6" disabled>
            <Accordion.Control className="!bg-white">Week 6: Advanced</Accordion.Control>
          </Accordion.Item>
        </Accordion>
      </Box>
    </section>
    </>
  );
};

export default StudentStats;
