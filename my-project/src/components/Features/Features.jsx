import React from 'react';
import "./Features.css";
import ResumeUpload from './resumeupload';
import resume from '../../assets/Images/resume.png';
import interview from '../../assets/Images/interview preparation.png';
import ResumeBuilder from './ResumeBuilder';
import build from '../../assets/Images/builder.png';
import job from '../../assets/Images/jobfinding.png';
import InterviewPreparation from './interviewpreparation';
import JobFinding from './jobfinding';


const Features = () => {
  return (
    <>
    <div className='caption'>
      <h1>Your Career, Our Guidance</h1>
      </div>
    <div className="features-container">
      <div className="feature">
        <ResumeUpload
          title="Upload Resume"
          imageSrc={resume}
          buttonName="Upload Resume"
        />
      </div>

      <div className="feature">
        <ResumeBuilder
          title="Resume Builder"
          imageSrc={build}
          buttonName="Build Your Resume"
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
    </>
  );
};

export default Features;
