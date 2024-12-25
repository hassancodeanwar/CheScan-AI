import React from 'react';
import { AlertCircle } from 'lucide-react';

interface AnalysisResultProps {
  result: string;
}

export default function AnalysisResult({ result }: AnalysisResultProps) {
  return (
    <div className="mt-6 p-4 bg-green-50 rounded-lg flex items-start space-x-3">
      <AlertCircle className="h-5 w-5 text-green-500 mt-0.5" />
      <div>
        <h4 className="font-semibold text-green-900">Analysis Result</h4>
        <p className="text-green-800">{result}</p>
      </div>
    </div>
  );
}