import React, { useState } from "react";
import { LogOut, User, Home, Upload, AlertCircle, Menu, X } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [profile, setProfile] = useState({
    name: user?.displayName || user?.name || "Alumni Member",
    email: user?.email || "",
    avatar: user?.photoURL || `https://i.pravatar.cc/150?u=${user?.email || "guest"}`,
    bio: user?.bio || "Proud alumnus of Dhaka International University",
    phone: user?.phone || "",
    address: user?.address || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile(prev => ({ ...prev, avatar: imageUrl }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      {/* Under Development Banner */}
      <div className="bg-amber-50 border-b border-amber-200 px-4 py-3 text-center text-amber-800 text-xs sm:text-sm font-medium flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4" />
        <span>This alumni portal is under active development. More features coming soon!</span>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50 flex flex-col lg:flex-row">
        
        {/* Mobile Header + Toggle Button */}
        <header className="lg:hidden bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <h2 className="text-xl font-bold text-emerald-700">My Dashboard</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="btn btn-circle btn-ghost"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </header>

        {/* Sidebar - Hidden on mobile, drawer-style */}
        <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                {user?.name?.charAt(0) || "A"}
              </div>
              <div>
                <h3 className="font-bold text-lg">Welcome!</h3>
                <p className="text-sm text-gray-600">Alumni Portal</p>
              </div>
            </div>

            <nav className="flex-1 space-y-2">
              <a className="flex items-center gap-3 px-5 py-4 bg-emerald-50 text-emerald-700 rounded-xl font-semibold shadow-sm">
                <User className="w-5 h-5" /> My Profile
              </a>
              <Link
                to="/"
                onClick={() => setIsSidebarOpen(false)}
                className="flex items-center gap-3 px-5 py-4 hover:bg-gray-100 rounded-xl transition"
              >
                <Home className="w-5 h-5" /> Back to Home
              </Link>
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-red-50 text-red-600 rounded-xl transition font-medium"
              >
                <LogOut className="w-5 h-5" /> Logout
              </button>
            </nav>

            <div className="border-t pt-6 mt-auto">
              <p className="text-xs text-gray-500 text-center">
                © 2025 DIU Alumni Association
              </p>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 sm:p-8 lg:p-12 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">My Profile</h1>
            <p className="text-gray-600 mb-10 text-sm sm:text-base">
              Update your information and stay connected with the DIU alumni community
            </p>

            {/* Profile Card */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 mb-10 border border-gray-100">
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <div className="relative group">
                  <img
                    src={profile.avatar}
                    alt="Profile"
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover ring-8 ring-emerald-100 shadow-2xl"
                  />
                  <label className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition flex items-center justify-center cursor-pointer">
                    <Upload className="w-8 h-8 text-white" />
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                </div>

                <div className="text-center sm:text-left flex-1">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{profile.name}</h2>
                  <p className="text-lg sm:text-xl text-emerald-600 mt-2">{profile.email}</p>
                  <p className="text-gray-600 mt-4 max-w-2xl text-sm sm:text-base">{profile.bio}</p>
                </div>
              </div>
            </div>

            {/* Edit Form */}
            <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Edit Your Information</h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition text-base"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition"
                      placeholder="+880 1XXX XXXXXX"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Bio / About You</label>
                    <textarea
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition resize-none"
                      placeholder="Share your journey, achievements, or current role..."
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">Current Location</label>
                    <input
                      type="text"
                      name="address"
                      value={profile.address}
                      onChange={handleChange}
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 outline-none transition"
                      placeholder="e.g. Dhaka, Bangladesh"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-600/30 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-base"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;