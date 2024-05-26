// src/Components/ForgotPasswordModal.js
import React from 'react';

const ForgotPasswordModal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-2">Did you forget password?</h2>
        <p className="text-center text-gray-500 mb-8">Enter your email address and we’ll send you a link to restore password</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-purple-200 focus:border-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700"
          >
            Request reset link
          </button>
        </form>
        <div className="text-center mt-4">
          <button
            onClick={onClose}
            className="text-purple-600 text-sm"
          >
            Back to log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
