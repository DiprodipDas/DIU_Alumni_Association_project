// src/components/AlumniDashboard.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAlumniAuth } from '../context/AlumniAuthContext';

const AlumniDashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const [jobs, setJobs] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false); // Mobile sidebar toggle

  const navigate = useNavigate();
  const API_BASE = "http://localhost:8081";

  const { alumniLogout } = useAlumniAuth(); // ← NEW: Get logout from context

  const handleLogout = () => {
    alumniLogout();   // Centralized logout (same as navbar)
    navigate('/');    // Go to home (or change to '/alumni/login')
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/alumni/me`, {
          credentials: "include",
        });
        if (!response.ok) throw new Error("Not authenticated");
        const result = await response.json();
        setData(result);
        setFormData(result.alumni || {});
        setJobs(result.jobs || []);
        setLoading(false);
      } catch (err) {
        navigate("/alumni/login");
      }
    };
    fetchProfile();
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleJobChange = (index, field, value) => {
    const updatedJobs = [...jobs];
    updatedJobs[index][field] = value;
    setJobs(updatedJobs);
  };

  const addJob = () => setJobs([...jobs, { company_name: "", job_position: "", start_date: "", end_date: "" }]);

  const removeJob = (index) => setJobs(jobs.filter((_, i) => i !== index));

  const handleSave = async () => {
    setMessage("");
    setError("");
    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== undefined && value !== null) form.append(key, value);
    });
    form.append("jobs", JSON.stringify(jobs));

    try {
      const response = await fetch(`${API_BASE}/api/alumni/me`, {
        method: "PUT",
        credentials: "include",
        body: form,
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Failed to save");

      setMessage(result.message || "Profile updated successfully!");
      setEditing(false);

      // Refresh data
      const refresh = await fetch(`${API_BASE}/api/alumni/me`, { credentials: "include" });
      const newData = await refresh.json();
      setData(newData);
      setFormData(newData.alumni || {});
      setJobs(newData.jobs || []);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading profile...</div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-blue-900 text-white transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-center h-16 bg-blue-950">
          <h2 className="text-2xl font-bold">Alumni Portal</h2>
        </div>

        <nav className="mt-10 px-6">
          <a
            href="#"
            className="flex items-center py-4 px-4 text-white bg-blue-800 rounded-lg mb-2"
          >
            <span className="ml-3 font-medium">My Profile</span>
          </a>

          <button
            onClick={() => navigate("/")} // Adjust route as needed
            className="w-full flex items-center py-4 px-4 text-white hover:bg-blue-800 rounded-lg mb-2 transition"
          >
            <span className="ml-3 font-medium">Back to Home</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-full flex items-center py-4 px-4 text-white hover:bg-red-800 rounded-lg transition mt-20"
          >
            <span className="ml-3 font-medium">Logout</span>
          </button>
        </nav>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top bar with hamburger */}
        <header className="bg-white shadow-md h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-3xl text-blue-900 lg:hidden"
          >
            ☰
          </button>
          <h1 className="text-2xl font-bold text-blue-900">My Alumni Profile</h1>
          <div className="w-10" /> {/* Spacer */}
        </header>

        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8">
            {message && (
              <div className="p-4 bg-green-100 text-green-800 rounded-lg mb-6">
                {message}
              </div>
            )}
            {error && (
              <div className="p-4 bg-red-100 text-red-800 rounded-lg mb-6">
                {error}
              </div>
            )}

            {!editing ? (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                  <div><strong>Name:</strong> {data.alumni.name}</div>
                  <div><strong>Reg Code:</strong> {data.alumni.regcode}</div>
                  <div><strong>Batch:</strong> {data.alumni.batch}</div>
                  <div><strong>Passing Year:</strong> {data.alumni.passing_year}</div>
                  <div><strong>Department:</strong> {data.alumni.department}</div>
                  <div><strong>Email:</strong> {data.alumni.EMAIL}</div>
                  <div><strong>Phone:</strong> {data.alumni.PHONE_NO}</div>
                  <div><strong>DOB:</strong> {data.alumni.DOB}</div>
                  <div><strong>Mailing Address:</strong> {data.alumni.MAILING_ADD}</div>
                  <div><strong>Permanent Address:</strong> {data.alumni.PARMANENT_ADD}</div>
                  <div>
                    <strong>LinkedIn:</strong>{" "}
                    <a href={data.alumni.LinkedIn_Link} className="text-blue-600 underline">
                      {data.alumni.LinkedIn_Link}
                    </a>
                  </div>
                  <div>
                    <strong>Facebook:</strong>{" "}
                    <a href={data.alumni.Facebook_Link} className="text-blue-600 underline">
                      {data.alumni.Facebook_Link}
                    </a>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-6">Job History</h2>
                {jobs.length > 0 ? (
                  jobs.map((job, i) => (
                    <div key={i} className="p-5 bg-gray-50 rounded-lg mb-4 border">
                      <p><strong>Company:</strong> {job.company_name}</p>
                      <p><strong>Position:</strong> {job.job_position}</p>
                      <p><strong>Dates:</strong> {job.start_date} — {job.end_date || "Present"}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-600">No job history added yet.</p>
                )}

                <button
                  onClick={() => setEditing(true)}
                  className="mt-10 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition"
                >
                  Edit Profile
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSave();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <input
                    name="name"
                    value={formData.name || ""}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="regcode"
                    value={formData.regcode || ""}
                    onChange={handleInputChange}
                    placeholder="Registration Code"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="batch"
                    value={formData.batch || ""}
                    onChange={handleInputChange}
                    placeholder="Batch"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="passing_year"
                    value={formData.passing_year || ""}
                    onChange={handleInputChange}
                    placeholder="Passing Year"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="department"
                    value={formData.department || ""}
                    onChange={handleInputChange}
                    placeholder="Department"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="EMAIL"
                    type="email"
                    value={formData.EMAIL || ""}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="PHONE_NO"
                    value={formData.PHONE_NO || ""}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="LinkedIn_Link"
                    value={formData.LinkedIn_Link || ""}
                    onChange={handleInputChange}
                    placeholder="LinkedIn URL"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    name="Facebook_Link"
                    value={formData.Facebook_Link || ""}
                    onChange={handleInputChange}
                    placeholder="Facebook URL"
                    className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <h2 className="text-2xl font-bold text-blue-900 mt-12 mb-6">Job History</h2>
                {jobs.map((job, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                    <input
                      value={job.company_name || ""}
                      onChange={(e) => handleJobChange(i, "company_name", e.target.value)}
                      placeholder="Company Name"
                      className="p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      value={job.job_position || ""}
                      onChange={(e) => handleJobChange(i, "job_position", e.target.value)}
                      placeholder="Job Position"
                      className="p-3 border border-gray-300 rounded-lg"
                    />
                    <div className="flex gap-2">
                      <input
                        value={job.start_date || ""}
                        onChange={(e) => handleJobChange(i, "start_date", e.target.value)}
                        type="text"
                        placeholder="Start Date (YYYY-MM)"
                        className="p-3 border border-gray-300 rounded-lg flex-1"
                      />
                      <input
                        value={job.end_date || ""}
                        onChange={(e) => handleJobChange(i, "end_date", e.target.value)}
                        type="text"
                        placeholder="End Date (or Present)"
                        className="p-3 border border-gray-300 rounded-lg flex-1"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeJob(i)}
                      className="md:col-span-3 text-red-600 hover:text-red-800 font-medium"
                    >
                      Remove Job
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addJob}
                  className="mb-8 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                  Add New Job
                </button>

                <div className="flex gap-6">
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditing(false)}
                    className="bg-gray-600 hover:bg-gray-700 text-white font-medium py-3 px-8 rounded-lg transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AlumniDashboard;