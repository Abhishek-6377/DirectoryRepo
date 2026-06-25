// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { BellIcon } from '@heroicons/react/24/outline';
import { UserCircleIcon, CogIcon } from '@heroicons/react/24/solid';

export default function Navbar({ sidebarOpen, setSidebarOpen }) {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isActive = (path) =>
    location.pathname === path ? "text-primary font-semibold" : "text-gray-600 hover:text-primary";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={` shadow-sm ${scrolled ? 'shadow-md' : ''} fixed top-0 left-0 right-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={`${isActive('/')} transition duration-200`}>
                Home
              </Link>
              <Link to="/about" className={`${isActive('/about')} transition duration-200`}>
                About
              </Link>
              <Link to="/contact" className={`${isActive('/contact')} transition duration-200`}>
                Contact
              </Link>
              <Link to="/directory" className={`${isActive('/directory')} transition duration-200`}>
                Directory
              </Link>
              <Link 
                to="/next-page1" 
                className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Membership
              </Link>
            </nav>
          </div>

          {/* Right side - Admin controls */}
          <div className="flex items-center">
            {/* Admin quick actions - only shown on larger screens */}
            <div className="hidden md:flex items-center space-x-4 mr-6">
              <Link to="/dashboard" className="text-sm text-gray-600 hover:text-primary">
                Admin Dashboard
              </Link>
            </div>

           

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden ml-4 inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`${isActive('/')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${isActive('/about')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${isActive('/contact')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/directory"
              className={`${isActive('/directory')} block px-3 py-2 rounded-md text-base font-medium`}
              onClick={toggleMenu}
            >
              Directory
            </Link>
            <Link
              to="/next-page1"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600"
              onClick={toggleMenu}
            >
              Membership
            </Link>
            <div className="border-t border-gray-200 pt-4 mt-2">
              <Link
                to="/dashboard"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={toggleMenu}
              >
                Admin Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}