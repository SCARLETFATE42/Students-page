import { Box } from '@mantine/core';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import StudentStats from '../src/components/StudentStats';
import ViewedDetailed from '../src/components/ViewedDetailed';
import Herosection from './Sections/Herosection';
import CreatePaymentPlan from './Sections/CreatePaymentPlan';
import Modalpopup from './Sections/Modalpopup';

const App = () => {
  return (
    <BrowserRouter>
      <Box className="bg-[#ebebeb54] min-h-screen flex items-start justify-between">
        {/* Sidebar */}
        <Box>
          <Navbar />
        </Box>

        {/* Main content area with routing */}
        <Box className="max-w-7xl mx-[47px] pb-8">
          {/* Top search bar */}
          <Herosection />

          {/* Page routes */}
          <Routes>
            <Route path="/" element={<StudentStats />} />
            <Route path="/assessment-1" element={<ViewedDetailed />} />
            <Route path="/payments" element={<CreatePaymentPlan />} />
            <Route path="/payments" element={<Modalpopup />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
