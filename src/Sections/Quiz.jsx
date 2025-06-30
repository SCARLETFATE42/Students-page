import { Box, Text } from "@mantine/core";

const CheckIcon = ({ color = "green" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`inline h-4 w-4 mr-1 ${color === "green" ? "text-green-500" : "text-red-500"}`}
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    {color === "green" ? (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    ) : (
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    )}
  </svg>
);

const QuizDetails = () => {
  const data = [
    { number: 1, status: "Correct", color: "green", text: "AI-Powered SEO, Marketing, & Productivity" },
    { number: 2, status: "Correct", color: "green", text: "Metus iaculis ut semper amet sit ac at mollis mi justo eget viverra facilisis parturient vestibulum in libero id etiam." },
    { number: 3, status: "Fail", color: "red", text: "Lorem vitae a urna in cursus sagittis tellus urna lectus vitae sit enim ut egestas massa diam auctor tristique condimentum." },
    { number: 4, status: "Correct", color: "green", text: "A neque amet duis vulputate ultricies nullam molestie molestie suscipit turpis in morbi tellus ipsum sollicitudin iaculis semper adipiscing id." },
    { number: 5, status: "Correct", color: "green", text: "Nunc neque neque risus accumsan sem blandit arcu consectetur dui morbi sed id id posuere facilisis duis aliquet pellentesque pulvinar consequat." },
    { number: 6, status: "Correct", color: "green", text: "Malesuada volutpat orci molestie sodales malesuada semper id purus eget ante egestas pulvinar ut nibh pellentesque sit metus a risus." },
  ];

  return (
    <Box className="bg-white p-6 rounded-[20px] mt-10 mb-10">
      <Text className="!text-2xl !font-bold !mb-6">Quiz details</Text>

      {data.map((item, index) => (
        <Box
          key={index}
          className="mt-5 mb-4 p-4 border border-[#e9eaf0] rounded-[20px] flex items-center"
        >
          <Box>
            <Text className="!font-semibold">
              Question {item.number} • <CheckIcon color={item.color} />
              {item.status}
            </Text>
            <Text>{item.text}</Text>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default QuizDetails;
