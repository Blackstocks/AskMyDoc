"use client";
import * as React from "react";
import { Upload } from "lucide-react";

const FileUploadComponent: React.FC = () => {
  const handleFileUploadButtonClick = () => {
    const el = document.createElement('input');
    el.setAttribute('type','file');
    el.setAttribute('accept','application/pdf');
    el.addEventListener('change', async (ev)=>{
        if(el.files && el.files.length > 0){
            const file = el.files.item(0)
            if(file){
                const formData = new FormData();
                formData.append('pdf', file);

                await fetch('http://localhost:8000/upload/pdf',{
                    method: 'POST',
                    body: formData,
                });
                console.log('file uploaded');
            }
        }
    })
    el.click();
  };

  return (
    <div className="bg-white min-h-60 text-neutral-900 shadow-xl flex flex-col justify-center items-center p-6 rounded-2xl border border-neutral-300 hover:border-blue-500 transition-all duration-300">
      <div
        onClick={handleFileUploadButtonClick}
        className="bg-neutral-100 p-4 rounded-full hover:bg-blue-100 transition-colors duration-300 cursor-pointer"
      >
        <Upload className="w-8 h-8 text-blue-600" />
      </div>
      <p className="mt-4 text-lg font-medium">Click to Upload</p>
      <p className="text-sm text-neutral-500">
        Drag & drop your files here or click the icon
      </p>
    </div>
  );
};

export default FileUploadComponent;
