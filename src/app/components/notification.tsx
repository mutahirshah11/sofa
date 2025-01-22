import React, { useEffect, useState } from 'react';

type Props = {
  message: string;
  onClose: () => void;
};

const NotificationMessage = ({ message, onClose }: Props) => {
  const [show, setShow] = useState(true);

  // Automatically hide the message after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose(); // Close the message after fade out
    }, 3000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, [message, onClose]);

  return (
    <div
      className={`fixed bottom-5 right-6 transition-all duration-100 ease-in-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } bg-green-500 text-white py-3 px-6 rounded- shadow-lg flex items-center border-[2px] border-green-400 space-x-4 z-10`}
    >
      {/* Checkmark Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-8 h-8 text-white"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M5 13l4 4L19 7"
        />
      </svg>

      <span className="text-[15px] md:text-[18px] font-semibold">{message}</span>

      {/* Processing Line (below the notification) */}
      <div className="absolute bottom-0 left-[-16px] w-full h-[5px] bg-gray-100 animate-progress-bar"></div>
    </div>
  );
};

export default NotificationMessage;
