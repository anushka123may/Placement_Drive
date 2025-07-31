import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, User, GraduationCap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [skillsDropdownOpen, setSkillsDropdownOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const dropdownRefs = {
    skills: useRef(null),
    practice: useRef(null),
    profile: useRef(null),
  };

  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("supabase.auth.token");
    setIsLoggedIn(!!token);
  }, [location]);

  const toggleDropdown = (dropdown: string) => {
    setSkillsDropdownOpen(dropdown === "skills" ? !skillsDropdownOpen : false);
    setPracticeDropdownOpen(dropdown === "practice" ? !practiceDropdownOpen : false);
    setProfileDropdownOpen(dropdown === "profile" ? !profileDropdownOpen : false);
  };

  const closeDropdowns = () => {
    setSkillsDropdownOpen(false);
    setPracticeDropdownOpen(false);
    setProfileDropdownOpen(false);
  };

  useEffect(() => {
    closeDropdowns();
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.keys(dropdownRefs).forEach((key) => {
        if (dropdownRefs[key as keyof typeof dropdownRefs].current && !dropdownRefs[key as keyof typeof dropdownRefs].current!.contains(event.target as Node)) {
          if (key === "skills") setSkillsDropdownOpen(false);
          if (key === "practice") setPracticeDropdownOpen(false);
          if (key === "profile") setProfileDropdownOpen(false);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-indigo-600">PlacementPrep</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>

            {/* Skills Dropdown */}
            <div className="relative" ref={dropdownRefs.skills}>
              <button className="text-gray-700 hover:text-indigo-600 flex items-center" onClick={() => toggleDropdown("skills")}>
                Skills <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {skillsDropdownOpen && (
                <div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                  <Link to="/skills/technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Technical Skills</Link>
                  <Link to="/skills/non-technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Non-Technical Skills</Link>
                  <Link to="/quiz" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" /> All Quizzes
                  </Link>
                  <Link to="/quiz/technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" /> Technical Quizzes
                  </Link>
                  <Link to="/quiz/non-technical" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50 flex items-center">
                    <GraduationCap className="mr-2 h-4 w-4" /> Non-Technical Quizzes
                  </Link>
                </div>
              )}
            </div>

            {/* Practice Dropdown */}
            <div className="relative" ref={dropdownRefs.practice}>
              <button className="text-gray-700 hover:text-indigo-600 flex items-center" onClick={() => toggleDropdown("practice")}>
                Practice Problems <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {practiceDropdownOpen && (
                <div className="absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                  <Link to="/practice/dsa" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">DSA</Link>
                  <Link to="/practice/aptitude" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Aptitude</Link>
                </div>
              )}
            </div>

            <Link to="/placement-drives" className="text-gray-700 hover:text-indigo-600">Placement Drives</Link>
            <Link to="/admin" className="text-gray-700 hover:text-indigo-600">Admin</Link>

            {/* Profile Dropdown */}
            <div className="relative" ref={dropdownRefs.profile}>
              <button className="text-gray-700 hover:text-indigo-600" onClick={() => toggleDropdown("profile")}>
                <User className="h-5 w-5" />
              </button>
              {profileDropdownOpen && (
                <div className="absolute right-0 z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Profile</Link>
                  {!isLoggedIn && <Link to="/login" className="block px-4 py-2 text-gray-700 hover:bg-indigo-50">Login</Link>}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Home</Link>
            <Link to="/skills/technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Technical Skills</Link>
            <Link to="/skills/non-technical" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Non-Technical Skills</Link>
            <Link to="/quiz" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Quizzes</Link>
            <Link to="/practice/dsa" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Practice</Link>
            <Link to="/placement-drives" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Placement Drives</Link>
            <Link to="/admin" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Admin</Link>
            <Link to="/profile" className="block px-3 py-2 text-gray-700 hover:text-indigo-600">Profile</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
