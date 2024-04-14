import React from 'react';
import "./Features.css";
import ResumeUpload from './resumeupload';
import resume from '../../assets/Images/resume.jpg';
import interview from '../../assets/Images/interview preparation.png';
import job from '../../assets/Images/jobfinding.png';
import InterviewPreparation from './interviewpreparation';
import JobFinding from './jobfinding';
import ResumeChecker from './ResumeChecker';

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <ResumeUpload
          title="Upload Resume"
          imageSrc={resume}
          buttonName="Upload Resume"
        />
      </div>
      <div className="feature">
        <InterviewPreparation
          title="Interview Preparation"
          imageSrc={interview}
          buttonName="Interview Preparation"
        />
      </div>
      <div className="feature">
        <JobFinding
          title="Job Finding"
          imageSrc={job}
          buttonName="Job Finding"
        />
      </div>
      
    </div>
  );
};

export default Features;
