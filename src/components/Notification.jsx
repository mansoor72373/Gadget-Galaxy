import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-16 right-4 bg-green-500 text-white p-2 rounded-lg shadow-lg flex items-center">
      <span className="mr-2">{message}</span>
      <button onClick={onClose} className="text-white font-bold">
        &times;
      </button>
    </div>
  );
};

export default Notification;
