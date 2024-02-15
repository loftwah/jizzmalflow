'use client';

import React, { useState } from 'react';
import JsonViewer from './components/JsonViewer';

export default function Home() {
    const [jsonData, setJsonData] = useState({});
    const [imageSrc, setImageSrc] = useState('images/jizzmalflow.jpg');

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const json = JSON.parse(e.target.result);
                    setJsonData(json);
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-4xl text-purple-700 font-bold mb-4">Jizzmalflow</h1>
            <img src={imageSrc} alt="Jizzmalflow Banner" className="mb-4 aspect-w-3 aspect-h-1 w-1/3 max-w-6xl object-cover shadow-lg rounded" />
            <label className="mb-2 cursor-pointer px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition duration-150 ease-in-out" htmlFor="fileInput">Upload JSON File</label>
            <input id="fileInput" type="file" onChange={handleFileChange} accept="application/json" className="hidden" />
            <JsonViewer jsonData={jsonData} />
        </div>
    );
}
