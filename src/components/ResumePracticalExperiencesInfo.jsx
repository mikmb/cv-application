import "./../styles/resume-practical-experiences-info.css";

function ResumePracticalExperiencesInfo({ experienceInfo }) {
  const { companyName, title, startDate, endDate, description } =
    experienceInfo;
  return (
    <>
      <div className="experience-info">
        <div className="experience-info-group">
          <p className="dates">
            {startDate}
            {startDate && endDate && <span> - </span>}
            {endDate}
          </p>
        </div>
        <div className="experience-info-group">
          <p className="experience-info-company-name">{companyName}</p>
          <p className="experience-info-title">{title}</p>
          <p className="experience-info-description">{description}</p>
        </div>
      </div>
    </>
  );
}

export default ResumePracticalExperiencesInfo;
