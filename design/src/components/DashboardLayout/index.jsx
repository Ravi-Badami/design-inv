import  { useState } from 'react';
import Sidebar from '../Sidebar/index';
import Header from '../Header/index';
import MainContent from '../MainContent/index';

function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Sidebar: Hidden on mobile, shown on larger screens */}
      <Sidebar isSidebarOpen={isSidebarOpen} />
      
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <MainContent />
      </div>
    </div>
  );
}

export default DashboardLayout;
