
import { MenuIcon } from '@heroicons/react/outline';  // Importing the MenuIcon

function Header({ toggleSidebar }) {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow">
      <div className="flex items-center">
        {/* Hamburger icon for mobile screens */}
        <button
          className="block md:hidden text-gray-600 mr-4"
          onClick={toggleSidebar}
        >
          <MenuIcon className="h-6 w-6" />
        </button>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center">
        <img src="https://avatars.githubusercontent.com/u/171466913?s=200&v=4" alt="profile" className="w-10 h-10 rounded-full mr-4" />
        <span>Ravikumar badami</span>
      </div>
    </header>
  );
}

export default Header;
