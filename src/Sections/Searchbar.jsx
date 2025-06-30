import { Box, Divider } from "@mantine/core"

const Searchbar = () => {
  return (
   <>
   <section className="flex flex-col max-w-7xl mx-auto">
   <Box className="flex items-center justify-between w-full py-[36.94px]">
  {/* Search Input with Icon */}
  <Box className="relative flex items-center">
    <input
      type="text"
      className="w-[842px] h-12 bg-white px-4 placeholder:text-[#00000066] placeholder:text-[16px]"
      placeholder="Search here"
    />
    <img src="/search.svg" alt="" className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer" />
  </Box>

  {/* Sort By Text */}
    <Divider size="md" orientation="vertical" className="mx-40" />
    <Box className="flex items-center gap-4">
        <img src="/notification.svg" alt="notification" className="w-6 h-6 cursor-pointer" />
        <Box className="w-6 h-6 bg-[#00000066] rounded-full"></Box>
    </Box>
</Box>
   </section>
  
   </>
  )
}

export default Searchbar