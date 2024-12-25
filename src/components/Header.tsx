import React from 'react';
import { Stethoscope } from 'lucide-react';
export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Stethoscope   className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">CheScan AI</h1>
          </div>
          {/* <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#analyze" className="text-gray-700 hover:text-blue-600">Analyze</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="#team" className="text-gray-700 hover:text-blue-600">Team</a>
          </nav> */}
        </div>
      </div>
    </header>
  );
}