import React from 'react';
import { Upload } from 'lucide-react';

interface UploadButtonProps {
  onUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedImage: string | null;
}

export default function UploadButton({ onUpload, selectedImage }: UploadButtonProps) {
  return (
    <label className="relative cursor-pointer block">
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected X-ray"
            className="max-h-64 mx-auto"
          />
        ) : (
          <div className="space-y-2">
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="text-gray-600">Click or drag file to upload</p>
          </div>
        )}
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={onUpload}
        className="hidden"
      />
    </label>
  );
}