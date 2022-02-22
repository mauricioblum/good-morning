import React, { useImperativeHandle, useState } from 'react';

interface ToastProps {
  message: string;
  timeout?: number;
}

export type ToastHandle = {
  showToast: () => void;
};

const Toast = React.forwardRef<ToastHandle, ToastProps>(({ message, timeout = 3000 }, ref) => {
  const [isShowing, setIsShowing] = useState('invisible opacity-0');

  const showToast = () => {
    if (ref) {
      setIsShowing('visible opacity-100');
      setTimeout(() => {
        setIsShowing('invisible opacity-0');
      }, timeout);
    }
  };

  useImperativeHandle(ref, () => {
    return {
      showToast,
    };
  });

  return (
    <div className={`absolute inset-center transition-all ${isShowing}`}>
      <div className="toast flex items-center justify-center w-full bg-neutral-700 px-4 py-2 rounded-full">
        <p className="text-white">{message}</p>
      </div>
    </div>
  );
});

export default Toast;
