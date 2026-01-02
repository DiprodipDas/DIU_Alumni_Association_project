import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useAlumniAuth } from '../context/AlumniAuthContext'; // ← New import

const Navbar = () => {
  const { isAlumniAuthenticated, alumniLogout, alumniLoading, alumniUser } = useAlumniAuth();
  const navigate = useNavigate();

  const handleAlumniLogout = () => {
    alumniLogout();     // Calls your backend logout endpoint
    navigate('/');      // Redirect to home after logout
  };


  if (alumniLoading) {
    return (
      <div className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50 w-full">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex justify-center items-center h-16 md:h-20">
            <span className="text-gray-600">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50 w-full">
        <div className="px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo + Mobile Menu */}
            <div className="flex items-center">
              <div className="dropdown lg:hidden">
                <div tabIndex={0} role="button" className="btn btn-ghost">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 w-56 p-4 bg-white rounded-box shadow-xl z-50"
                >
                  <li><Link to="/">Home</Link></li>
                  {/* <li><Link to="/alumnigallary">Gallary</Link></li> */}
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/blog">Blogs</Link></li>

                  {/* Alumni Directory */}
                  <li>
                    <details>
                      <summary className="font-semibold">Alumni Directory</summary>
                      <ul className="p-2 bg-white rounded space-y-3">
                        <li>
                          <details>
                            <summary className="text-sm font-medium text-green-700">
                              Faculty of Science & Engineering
                            </summary>
                            <ul className="pl-4 space-y-1">
                              <li>
                                <Link to="/directory/cse" className="text-sm">
                                  Computer Science & Engineering
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/eee" className="text-sm">
                                  Electrical & Electronic Engineering
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/civil" className="text-sm">Civil Engineering</Link>
                              </li>
                              <li>
                                <Link to="/directory/pharmacy" className="text-sm">
                                  Bachelor of Pharmacy (Hons.)
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/microbiology" className="text-sm">Microbiology</Link>
                              </li>
                              <li>
                                <Link to="/directory/bmb" className="text-sm">
                                  Biochemistry and Molecular Biology
                                </Link>
                              </li>
                            </ul>
                          </details>
                        </li>

                        <li>
                          <details>
                            <summary className="text-sm font-medium text-green-700">
                              Faculty of Business Studies
                            </summary>
                            <ul className="pl-4 space-y-1">
                              <li>
                                <Link to="/directory/bba" className="text-sm">
                                  Bachelor of Business Administration (BBA)
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/mba" className="text-sm">
                                  Master of Business Administration (MBA)
                                </Link>
                              </li>
                            </ul>
                          </details>
                        </li>

                        <li>
                          <details>
                            <summary className="text-sm font-medium text-green-700">
                              Faculty of Arts & Social Sciences
                            </summary>
                            <ul className="pl-4 space-y-1">
                              <li>
                                <Link to="/directory/english" className="text-sm">
                                  B.A. (Hons.) in English
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/politicalscience" className="text-sm">
                                  BSS in Political Science
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/developmentstudies" className="text-sm">
                                  Development Studies
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/sociology" className="text-sm">
                                  BSS (Hons.) in Sociology
                                </Link>
                              </li>
                              <li>
                                <Link to="/directory/economics" className="text-sm">
                                  BSS (Hons.) In Economics
                                </Link>
                              </li>
                            </ul>
                          </details>
                        </li>

                        <li>
                          <details>
                            <summary className="text-sm font-medium text-green-700">
                              Faculty of Law
                            </summary>
                            <ul className="pl-4 space-y-1">
                              <li>
                                <Link to="/directory/llb" className="text-sm">LL.B. (Hons.)</Link>
                              </li>
                              <li>
                                <Link to="/directory/llm" className="text-sm">LL.M.</Link>
                              </li>
                              <li>
                                <Link to="/directory/mhrl" className="text-sm">
                                  Master of Human Rights Law
                                </Link>
                              </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>

                  {/* New Events Dropdown (Mobile) */}
                  <li>
                    <details>
                      <summary className="font-semibold">Events</summary>
                      <ul className="p-2 bg-white rounded space-y-3">
                        {/* <li>
                          <Link to="/events/alumni-events" className="text-sm">
                            Alumni Events
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to="/events/reunion" className="text-sm">Reunion</Link>
                        </li> */}
                        <li>
                          <Link to="/events/departmental-reunion" className="text-sm">
                            Departmental Reunion
                          </Link>
                        </li>
                        {/* <li>
                          <Link to="/events/career-events" className="text-sm">
                            Career Events
                          </Link>
                        </li> */}
                        {/* <li>
                          <Link to="/events/iftaar-event" className="text-sm">Iftaar Event</Link>
                        </li> */}
                        {/* Add more event types here if needed */}
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>

              <Link to="/" className="flex items-center space-x-3">
                <img
                  src="/logo3.png"
                  alt="DIU Alumni"
                  className="w-40 h-40 md:w-80 md:h-80 object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center space-x-10">
              <Link to="/" className="text-gray-700 hover:text-green-600 font-medium transition">
                Home
              </Link>
              {/* <Link to="/alumnigallary" className="text-gray-700 hover:text-green-600 font-medium transition">
                Gallary
              </Link> */}
              <Link to="/about" className="text-gray-700 hover:text-green-600 font-medium transition">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium transition">
                Contact
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-green-600 font-medium transition">
                Blogs
              </Link>

              {/* Alumni Directory */}
              <details className="dropdown">
                <summary className="list-none text-gray-700 hover:text-green-600 font-medium cursor-pointer">
                  Alumni Directory
                </summary>
                <ul className="p-5 shadow menu dropdown-content z-50 bg-white rounded-box w-80 mt-3 space-y-4">
                  <li>
                    <details open={false}>
                      <summary className="font-semibold text-green-700 hover:text-green-800">
                        Faculty of Science & Engineering
                      </summary>
                      <ul className="pl-6 space-y-2 mt-2">
                        <li>
                          <Link to="/directory/cse" className="text-gray-600 hover:text-green-600">
                            Computer Science & Engineering
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/eee" className="text-gray-600 hover:text-green-600">
                            Electrical & Electronic Engineering
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/civil" className="text-gray-600 hover:text-green-600">
                            Civil Engineering
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/pharmacy" className="text-gray-600 hover:text-green-600">
                            Bachelor of Pharmacy (Hons.)
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/microbiology" className="text-gray-600 hover:text-green-600">
                            Microbiology
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/bmb" className="text-gray-600 hover:text-green-600">
                            Biochemistry and Molecular Biology
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <details open={false}>
                      <summary className="font-semibold text-green-700 hover:text-green-800">
                        Faculty of Business Studies
                      </summary>
                      <ul className="pl-6 space-y-2 mt-2">
                        <li>
                          <Link to="/directory/bba" className="text-gray-600 hover:text-green-600">
                            Bachelor of Business Administration (BBA)
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/mba" className="text-gray-600 hover:text-green-600">
                            Master of Business Administration (MBA)
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <details open={false}>
                      <summary className="font-semibold text-green-700 hover:text-green-800">
                        Faculty of Arts & Social Sciences
                      </summary>
                      <ul className="pl-6 space-y-2 mt-2">
                        <li>
                          <Link to="/directory/english" className="text-gray-600 hover:text-green-600">
                            B.A. (Hons.) in English
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/politicalscience" className="text-gray-600 hover:text-green-600">
                            BSS in Political Science
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/developmentstudies" className="text-gray-600 hover:text-green-600">
                            Development Studies
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/sociology" className="text-gray-600 hover:text-green-600">
                            BSS (Hons.) in Sociology
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/economics" className="text-gray-600 hover:text-green-600">
                            BSS (Hons.) In Economics
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>

                  <li>
                    <details open={false}>
                      <summary className="font-semibold text-green-700 hover:text-green-800">
                        Faculty of Law
                      </summary>
                      <ul className="pl-6 space-y-2 mt-2">
                        <li>
                          <Link to="/directory/llb" className="text-gray-600 hover:text-green-600">
                            LL.B. (Hons.)
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/llm" className="text-gray-600 hover:text-green-600">
                            LL.M.
                          </Link>
                        </li>
                        <li>
                          <Link to="/directory/mhrl" className="text-gray-600 hover:text-green-600">
                            Master of Human Rights Law
                          </Link>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>

              {/* New Events Dropdown (Desktop) */}
              <details className="dropdown">
                <summary className="list-none text-gray-700 hover:text-green-600 font-medium cursor-pointer">
                  Events
                </summary>
                <ul className="p-5 shadow menu dropdown-content z-50 bg-white rounded-box w-64 mt-3 space-y-3">
                  {/* <li>
                    <Link to="/events/alumni-events" className="text-gray-600 hover:text-green-600">
                      Alumni Events
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to="/events/reunion" className="text-gray-600 hover:text-green-600">
                      Reunion
                    </Link>
                  </li> */}
                  <li>
                    <Link to="/events/departmental-reunion" className="text-gray-600 hover:text-green-600">
                      Departmental Reunion
                    </Link>
                  </li>
                  {/* <li>
                    <Link to="/events/career-events" className="text-gray-600 hover:text-green-600">
                      Career Events
                    </Link>
                  </li> */}
                  {/* <li>
                    <Link to="/events/iftaar-event" className="text-gray-600 hover:text-green-600">
                      Iftaar Event
                    </Link>
                  </li> */}
                  {/* You can add more event types here */}
                </ul>
              </details>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {isAlumniAuthenticated ? (
                <>
                  {/* Optional: Show alumni name/email */}
                  {alumniUser && (
                    <span className="hidden sm:block text-xs sm:text-sm text-gray-600 truncate max-w-32">
                      {alumniUser.name || alumniUser.EMAIL || 'Alumni'}
                    </span>
                  )}

                  {/* Dashboard Button */}
                  <Link
                    to="/alumni/alumnidashboard"  // ← Change if your dashboard route is different
                    className="px-4 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-base 
        border border-green-600 text-green-600 rounded-lg 
        hover:bg-green-600 hover:text-white font-medium 
        transition whitespace-nowrap"
                  >
                    Dashboard
                  </Link>

                  {/* Logout Button */}
                  <button
                    onClick={handleAlumniLogout}
                    className="px-4 py-1.5 text-xs sm:px-6 sm:py-2 sm:text-base 
        bg-red-600 hover:bg-red-700 text-white rounded-lg 
        font-medium transition whitespace-nowrap"
                  >
                    Log Out
                  </button>
                </>
              ) : (
                <>
                  {/* Login Button */}
                  <Link
                    to="/alumni/login"
                    className="px-3 py-1 text-xs sm:px-6 sm:py-2 sm:text-base 
        border border-green-600 text-green-600 rounded-lg 
        hover:bg-green-600 hover:text-white font-medium 
        transition whitespace-nowrap"
                  >
                    Log In
                  </Link>

                  {/* Membership Plan Button */}
                  <Link
                    to="/membership"
                    className="px-3 py-1 text-xs sm:px-6 sm:py-2 sm:text-base 
        bg-green-600 hover:bg-green-700 text-white rounded-lg 
        font-medium transition whitespace-nowrap"
                  >
                    Membership Plan
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;