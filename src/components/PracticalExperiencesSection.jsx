import "./../styles/practical-experiences-section.css";
import ExpandSection from "./ExpandSection";
import DisplayForms from "./DisplayForms";
import ExperienceForm from "./ExperienceForm";
import CreateForm from "./CreateForm";

function PracticalExperiencesSection({
  experiences,
  isOpen,
  setOpen,
  onChange,
  createForm,
  onCancel,
  toggleCollapsed,
  onRemove,
}) {
  return (
    <div className="experiences-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Experience"
        iconName="fa-solid fa-briefcase"
      />

      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForms
          forms={experiences}
          FormComponent={ExperienceForm}
          onChange={onChange}
          onCancel={onCancel}
          onRemove={onRemove}
          toggleCollapsed={toggleCollapsed}
          titleKey="companyName"
          arrayName="experiences"
        />

        <CreateForm onClick={createForm} buttonName="Experience" />
      </div>
    </div>
  );
}
export default PracticalExperiencesSection;
