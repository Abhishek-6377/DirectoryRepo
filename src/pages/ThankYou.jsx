// src/pages/ThankYou.jsx
import React from 'react';

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white p-10 rounded-3xl shadow-xl text-center max-w-xl">
        <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Thank You!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Your membership has been successfully submitted.
        </p>
        <p className="text-sm text-gray-500">We’ve sent you a confirmation email.</p>
      </div>
    </div>
  );
};

export default ThankYou;
