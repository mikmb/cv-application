import "./../styles/education-section.css";
import ExpandSection from "./ExpandSection";
import EducationForm from "./EducationForm";
import DisplayForms from "./DisplayForms";
import CreateForm from "./CreateForm";
function EducationSection({
  education,
  isOpen,
  setOpen,
  onChange,
  createForm,
  onCancel,
  toggleCollapsed,
  onRemove,
}) {
  return (
    <div className="education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa-solid fa-graduation-cap"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={education}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="schoolName"
          arrayName="education"
        />

        <CreateForm onClick={createForm} buttonName="Education" />
      </div>
    </div>
  );
}

export default EducationSection;
