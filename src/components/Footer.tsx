import React from 'react';
import { Stethoscope } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-center mb-8">
          <Stethoscope className="h-8 w-8 text-blue-400" />
          <span className="ml-3 text-2xl font-bold">ChesScan AI</span>
        </div>
        <p className="text-center text-gray-400">
          © {new Date().getFullYear()} ChesScan AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}