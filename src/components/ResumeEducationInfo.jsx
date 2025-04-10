import "./../styles/resume-education-info.css";
function ResumeEducationInfo({ educationInfo }) {
  const { schoolName, degree, startDate, endDate } = educationInfo;
  console.log("here: " + schoolName);
  return (
    <div className="education-info">
      <div className="education-info-group">
        <p className="dates">
          {startDate}
          {startDate && endDate && <span> - </span>}
          {endDate}
        </p>
      </div>
      <div className="education-info-group">
        <p className="education-info-school-name">{schoolName}</p>
        <p className="education-info-major">{degree}</p>
      </div>
    </div>
  );
}

export default ResumeEducationInfo;
