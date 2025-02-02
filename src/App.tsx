import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const App: React.FC = () => {
  const [courseCode, setCourseCode] = useState('MATH 153');
  const [courseName, setCourseName] = useState('Calculus I');
  const logoRef = useRef<HTMLDivElement>(null);

  const downloadLogo = async () => {
    if (logoRef.current) {
      const canvas = await html2canvas(logoRef.current);
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `${courseCode}-logo.png`;
      link.href = url;
      link.click();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1527] to-[#2D2640] flex flex-col items-center justify-center py-12 px-4">
      <div
        ref={logoRef}
        className="w-[512px] h-[512px] bg-[#2D2640] relative overflow-hidden rounded-full shadow-2xl mb-12"
      >
        <div className="absolute inset-0 opacity-10 before:absolute before:inset-0 before:bg-transparent before:z-10 before:pointer-events-none before:grid before:grid-cols-[repeat(auto-fill,_20px)] before:grid-rows-[repeat(auto-fill,_20px)] before:[background-size:20px_20px] before:[background-image:linear-gradient(to_right,_#FF6B6B_1px,_transparent_1px),linear-gradient(to_bottom,_#FF6B6B_1px,_transparent_1px)]"></div>
        <div className="absolute inset-4 rounded-full border-4 border-[#FFB347] opacity-50" />
        <div className="relative h-full flex flex-col items-center justify-center p-8">
          <div className="text-center space-y-6">
            <div className="text-7xl font-bold text-[#FFB347] bg-clip-text leading-tight tracking-wider">
              {courseCode}
            </div>
            <p className="text-2xl text-[#FFB347] tracking-wider">{courseName}</p>
          </div>
        </div>
      </div>
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-4">
          <input
            type="text"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            className="w-full px-6 py-3 rounded-xl border-2 border-[#FFB347] bg-[#2D2640]/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:border-transparent transition-all"
            placeholder="Course Code"
          />
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            className="w-full px-6 py-3 rounded-xl border-2 border-[#FFB347] bg-[#2D2640]/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFB347] focus:border-transparent transition-all"
            placeholder="Course Name"
          />
        </div>
        <button
          onClick={downloadLogo}
          className="w-full bg-gradient-to-r from-[#FF6B6B] via-[#FFB347] to-[#FF6B6B] text-white py-4 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 shadow-lg cursor-pointer hover:scale-105"
        >
          Download Logo
        </button>
      </div>
    </div>
  );
};

export default App;