import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  UsersIcon,
  ShoppingBagIcon,
  CogIcon,
  XMarkIcon,
  ChevronDoubleLeftIcon,
  TicketIcon,
} from '@heroicons/react/24/outline';
import {FaRupeeSign} from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: HomeIcon },
    { name: 'Admin Directory', path: '/admin-directory', icon: UsersIcon },
    { name: 'Used Code', path: '/used-code', icon: TicketIcon },
    { name: 'Payment', path: '/payment-page', icon: FaRupeeSign }, // Updated icon here
  ];

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40 ${
          sidebarOpen ? 'block' : 'hidden'
        }`}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar panel */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:relative md:translate-x-0 transition-transform duration-200 ease-in-out z-50 w-64 bg-white border-r border-gray-200 flex flex-col h-full`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h1 className="text-xl font-bold text-primary">Admin Panel</h1>
          <button
            className="md:hidden text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md ${
                  isActive
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        {/* Footer Toggle */}
        <div className="p-4 border-t border-gray-200 hidden md:block">
          <button
            className="text-gray-500 hover:text-gray-600"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <ChevronDoubleLeftIcon
              className={`h-5 w-5 transform transition-transform duration-300 ${
                sidebarOpen ? '' : 'rotate-180'
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
