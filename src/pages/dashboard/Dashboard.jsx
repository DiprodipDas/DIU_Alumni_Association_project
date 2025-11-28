import React, { useState } from "react";
import { LogOut, Settings, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router";

const Dashboard = ({ currentUser }) => {
  const [profile, setProfile] = useState({
    name: currentUser?.displayName || "Guest User",
    email: currentUser?.email || "",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, avatar: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile:", profile);
    alert("Profile updated successfully!");
  };

  const { user,logout} = useAuth()
      console.log(user)

       const handleLogOut=()=>{
        logout();
    }


  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 hidden md:block">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <User className="w-5 h-5" /> Profile
          </a>
          <Link to='/' className="flex items-center gap-2 text-gray-700 hover:text-blue-600">
            <Settings className="w-5 h-5" /> Go to Home
          </Link>
          <a href="#" onClick={handleLogOut} className="flex items-center gap-2 text-gray-700 hover:text-red-600">
            <LogOut className="w-5 h-5" /> Logout
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow p-6 flex flex-col md:flex-row gap-6">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
            <div className="flex-1">
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-500">{profile.email}</p>
              <p className="mt-3 text-gray-700">{profile.bio || "No bio added yet."}</p>
            </div>
          </div>

          {/* Editable Profile Form */}
          <div className="mt-8 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-gray-600">Profile Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-600">Bio</label>
                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                  rows="3"
                ></textarea>
              </div>

              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block text-gray-600">Address</label>
                <input
                  type="text"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  className="w-full mt-1 p-2 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;