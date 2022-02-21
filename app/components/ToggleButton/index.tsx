import React, { useRef, useState } from 'react';
import { useEffect } from 'react';

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLInputElement> {
  icons?: {
    checked: string;
    notChecked: string;
  };
}

export const ToggleButton: React.FC<ToggleButtonProps> = (props) => {
  const dotRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [icon, setIcon] = useState<string>(props.icons?.notChecked || '🔆');

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIcon(e.target.checked ? props.icons?.checked || '🔆' : props.icons?.notChecked || '🔆');
    if (dotRef.current) {
      dotRef.current.classList.toggle('translate-x-full');
      dotRef.current.classList.toggle('bg-slate-800');
    }
    props.onChange?.(e);
  };

  const toggleTheme = () => {
    if (dotRef.current && localStorage.themePreference === 'dark') {
      console.log('🚀 ~ useEffect ~ themePreference', localStorage.themePreference);
      setIcon(props.icons?.checked || '🌙');
      if (inputRef.current) {
        inputRef.current.checked = true;
      }
      dotRef.current.classList.toggle('translate-x-full');
      dotRef.current.classList.toggle('bg-slate-800');
    }
  };

  useEffect(() => {
    if (localStorage.themePreference) {
      if (localStorage.themePreference === 'dark') {
        document.documentElement.classList.add('dark');
        toggleTheme();
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else if (
      !('themePreference' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.documentElement.classList.add('dark');
      localStorage.themePreference = 'dark';
      toggleTheme();
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.themePreference = '';
    }
  }, []);

  return (
    <div className="flex items-center justify-center w-full mb-12">
      <label htmlFor="toggle" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            ref={inputRef}
            onChange={onToggle}
            type="checkbox"
            id="toggle"
            className="sr-only"
          />
          <div className="block bg-gray-600 dark:bg-gray-200 w-14 h-8 rounded-full"></div>
          <div
            ref={dotRef}
            className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"
          ></div>
        </div>
        <div className="ml-3 text-gray-700 font-medium">{icon}</div>
      </label>
    </div>
  );
};
