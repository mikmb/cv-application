import "./../styles/resume-personal-info-section.css";

function ResumePersonalInfoSection({ firstName, lastName, email, phone }) {
  return (
    <div className="personal-info">
      <h1 className="full-name">
        {firstName} {lastName}
      </h1>
      <div className="contact-info">
        {email && (
          <div>
            <i className="fa-solid fa-envelope"></i>
            <span>{email}</span>
          </div>
        )}
        {phone && (
          <div>
            <i className="fa-solid fa-phone"></i>
            <span>{phone}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResumePersonalInfoSection;
