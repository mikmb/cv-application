import ResumePracticalExperiencesInfo from "./ResumePracticalExperiencesInfo";

function ResumePracticalExperiencesSection({ experiences }) {
  return (
    <>
      {experiences && experiences.length > 0 && (
        <h3 className="header-text">Experience</h3>
      )}
      {experiences &&
        experiences.length > 0 &&
        experiences.map((experienceInfo) => (
          <ResumePracticalExperiencesInfo
            key={experienceInfo.id}
            experienceInfo={experienceInfo}
          />
        ))}
    </>
  );
}

export default ResumePracticalExperiencesSection;
