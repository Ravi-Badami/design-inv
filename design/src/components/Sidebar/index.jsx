import React, { Fragment } from 'react';
import { Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';  // Importing Hamburger icon

function Sidebar({ isSidebarOpen }) {
  return (
    <>
      {/* Static Sidebar for large screens */}
      <aside className="hidden md:block w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-4">App Name</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="/profile" className="block py-2 px-4 hover:bg-gray-700">Profile</a>
            </li>
            <li>
              <a href="/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Sidebar for mobile: Use transition for smooth toggle */}
      <Transition
        as={Fragment}
        show={isSidebarOpen}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 transform -translate-x-full"
        enterTo="opacity-100 transform translate-x-0"
        leave="transition ease-in duration-300"
        leaveFrom="opacity-100 transform translate-x-0"
        leaveTo="opacity-0 transform -translate-x-full"
        className="md:hidden fixed inset-0 z-50 bg-gray-800 text-white w-64 p-4"
      >
        <h2 className="text-xl font-bold mb-4">App Name</h2>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/dashboard" className="block py-2 px-4 hover:bg-gray-700">Dashboard</a>
            </li>
            <li className="mb-2">
              <a href="/profile" className="block py-2 px-4 hover:bg-gray-700">Profile</a>
            </li>
            <li>
              <a href="/settings" className="block py-2 px-4 hover:bg-gray-700">Settings</a>
            </li>
          </ul>
        </nav>
      </Transition>
    </>
  );
}

export default Sidebar;
