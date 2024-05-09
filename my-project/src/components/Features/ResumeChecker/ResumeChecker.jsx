import React, { useState } from 'react';
import './ResumeChecker.css';

const ResumeChecker = ({ onUpload }) => {
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const content = event.target.result;
        onUpload(content); // Pass the content to the parent component's handler
      };
      reader.readAsText(file);
      setUploadMessage('Upload successful!');
    } catch (error) {
      console.error('Upload error:', error);
      setUploadMessage('Upload failed. Please try again.');
    }
  };

  const handleButtonClick = () => {
    document.getElementById('resumeInput').click();
  };

  return (
    <div className="resume-checker-container">
      <div className="resume-checker">
        <h1>Welcome to Our Free and Fast AI Resume Checker!</h1>
        <p>In a challenging job market, our AI tool crafts standout resumes to boost your interview opportunities.</p>
        <div className="upload-container">
          <input type="file" id="resumeInput" onChange={handleFileChange} accept=".pdf,.docx" style={{ display: 'none' }} />
          <p>Drop your resume here or choose a file in PDF or DOCX format with a maximum size of 2MB.</p>
          <button onClick={handleButtonClick}>
            Upload Your Resume
          </button>
          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
};

const ResumeAnalyzer = () => {
  const [analysisResult, setAnalysisResult] = useState(null);

  const analyzeResume = async (content) => {
    // Example ATS verification logic: Check if content exists
    const correctness = content ? 100 : 0;
    setAnalysisResult(correctness);
  };

  return (
    <div>
      
      <ResumeChecker onUpload={analyzeResume} />
      {analysisResult !== null && (
        <div>
          <h2>Analysis Result: {analysisResult}%</h2>
        </div>
      )}
    </div>
  );
};

export default ResumeAnalyzer;
