'use client'
import * as React from 'react';
import { Upload } from 'lucide-react';

const FileUploadComponent: React.FC = () => {
    return (
        <div className="bg-slate-900 min-h-60 text-white shadow-2xl flex flex-col justify-center items-center p-6 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300">
            <div className="bg-slate-800 p-4 rounded-full hover:bg-blue-600 transition-colors duration-300 cursor-pointer">
                <Upload className="w-8 h-8" />
            </div>
            <p className="mt-4 text-lg font-medium">Click to Upload</p>
            <p className="text-sm text-slate-400">Drag & drop your files here or click the icon</p>
        </div>
    );
};

export default FileUploadComponent;
