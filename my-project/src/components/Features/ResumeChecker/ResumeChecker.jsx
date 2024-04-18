import React, { useState } from 'react';
import './ResumeChecker.css';

function ResumeChecker() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(file.type)) {
      setSelectedFile(file);
      setUploadMessage('');
    } else {
      alert('Please upload a PDF or DOCX file only.');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setIsUploading(true);
    setUploadMessage('');

    try {
      const formData = new FormData();
      formData.append('resume', selectedFile);

      // Replace with your actual server endpoint and handle response
      const response = await fetch('/upload-resume', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadMessage('Upload successful!');
      } else {
        setUploadMessage('Upload failed. Please try again.');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadMessage('Upload failed. Please try again.');
    } finally {
      setIsUploading(false);
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
          <p>Drop your resumes/CVs here or choose a file in PDF or DOCX format with a maximum size of 2MB.</p>
          <button onClick={handleButtonClick} disabled={isUploading}>
            {isUploading ? 'Uploading...' : 'Upload Your Resume'}
          </button>
          {uploadMessage && <p className="upload-message">{uploadMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ResumeChecker;
