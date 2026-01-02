import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AlumniLogin = () => {
  const [step, setStep] = useState(1); // 1: Enter contact, 2: Enter OTP
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Change this if your backend runs on a different port/domain
  const API_BASE = "http://localhost:8081";

  const handleSendOtp = async (e) => {
    e.preventDefault();
    if (!contact.trim()) {
      setError("Please enter your email or phone number");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_BASE}/api/alumni/login/init`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Important for session cookies
        body: JSON.stringify({ contact: contact.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send OTP");
      }

      setMessage(data.message || "OTP sent successfully!");
      setStep(2);
    } catch (err) {
      setError(err.message || "Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim() || otp.length !== 6) {
      setError("Please enter the 6-digit OTP");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(`${API_BASE}/api/alumni/login/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // Required for session
        body: JSON.stringify({
          contact: contact.trim(),
          otp: otp.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Invalid OTP");
      }

      setMessage("Login successful! Redirecting to your profile...");

      setTimeout(() => {
        navigate("/alumni/alumnidashboard"); // Change to your alumni dashboard route
      }, 1500);
    } catch (err) {
      setError(err.message || "Invalid or expired OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = () => {
    setOtp("");
    setStep(1);
    setMessage("");
    setError("You can now request a new OTP.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Alumni Portal</h1>
          <p className="text-gray-600 mt-2">Access your profile and documents</p>
        </div>

        {message && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        {error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}

        {/* Step 1: Enter Email/Phone */}
        {step === 1 && (
          <form onSubmit={handleSendOtp}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Email or Phone Number
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="example@domain.com or 01XXXXXXXXX"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                disabled={loading}
              />
              <p className="text-xs text-gray-500 mt-2">
                We'll send a 6-digit OTP to verify your identity
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-70"
            >
              {loading ? "Sending OTP..." : "Send OTP"}
            </button>
          </form>
        )}

        {/* Step 2: Enter OTP */}
        {step === 2 && (
          <form onSubmit={handleVerifyOtp}>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-medium mb-2">
                Enter 6-digit OTP
              </label>
              <input
                type="text"
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="123456"
                className="w-full text-center text-2xl tracking-widest px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition"
                disabled={loading}
              />
              <p className="text-sm text-gray-600 mt-3 text-center">
                Sent to: <strong>{contact}</strong>
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="submit"
                disabled={loading || otp.length !== 6}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition duration-200 disabled:opacity-70"
              >
                {loading ? "Verifying..." : "Verify OTP & Login"}
              </button>

              <button
                type="button"
                onClick={handleResendOtp}
                className="w-full text--500 hover:text-red-600 font-medium text-sm underline"
              >
                Didn't receive OTP? Request new one
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          Secured by DIU • No password required
        </div>
      </div>
    </div>
  );
};

export default AlumniLogin;