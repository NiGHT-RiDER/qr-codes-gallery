import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) return null;
    return (
        <button
            className="absolute top-0 right-0 mt-4 mr-4 w-16 h-12 bg-gray-100 rounded-lg dark:bg-slate-800 flex items-center justify-center hover:ring-2 ring-gray-400 transition-all duration-200 focus:outline-none"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? (
                <MoonIcon className="text-gray-500 w-5 h-5" />
            ) : (
                <SunIcon className="text-gray-400 w-5 h-5" />
            )}
        </button>
    );
};

export default ThemeToggler;
