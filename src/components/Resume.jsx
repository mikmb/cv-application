import { forwardRef } from "react";
import "./../styles/resume.css";
import ResumePersonalInfoSection from "./ResumePersonalInfoSection";
import ResumeEducationInfoSection from "./ResumeEducationInfoSection";
import ResumePracticalExperiencesSection from "./ResumePracticalExperiencesSection";

const Resume = forwardRef(({ personalInfo, education, experiences }, ref) => {
  console.log(">>>" + Array.isArray(education));
  return (
    <div className="resume-container" ref={ref}>
      <ResumePersonalInfoSection
        firstName={personalInfo.firstName}
        lastName={personalInfo.lastName}
        email={personalInfo.email}
        phone={personalInfo.phone}
      />
      <ResumeEducationInfoSection education={education} />
      <ResumePracticalExperiencesSection experiences={experiences} />
    </div>
  );
});

export default Resume;
