import ResumeEducationInfo from "./ResumeEducationInfo";

function ResumeEducationInfoSection({ education }) {
  return (
    <>
      {education && education.length > 0 && (
        <h3 className="header-text">Education</h3>
      )}
      {education &&
        education.length > 0 &&
        education.map((educationInfo) => (
          <ResumeEducationInfo
            key={educationInfo.id}
            educationInfo={educationInfo}
          />
        ))}
    </>
  );
}
export default ResumeEducationInfoSection;
