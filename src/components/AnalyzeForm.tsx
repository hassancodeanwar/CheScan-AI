import React, { useState } from 'react';
import UploadButton from './UploadButton';
import AnalysisResult from './AnalysisResult';

export default function AnalyzeForm() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    setLoading(true);
    // Simulate AI analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    setResult("Normal - No significant abnormalities detected");
    setLoading(false);
  };

  return (
    <section id="analyze" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Analyze Your Chest X-Ray</h2>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Chest X-Ray Image
            </label>
            <UploadButton onUpload={handleImageUpload} selectedImage={selectedImage} />
          </div>

          {selectedImage && (
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className={`w-full py-3 px-4 rounded-lg text-white font-semibold ${
                loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
              } transition-colors`}
            >
              {loading ? 'Analyzing...' : 'Analyze Image'}
            </button>
          )}

          {result && <AnalysisResult result={result} />}
        </div>
      </div>
    </section>
  );
}