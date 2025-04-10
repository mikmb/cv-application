import { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import TemplateLoader from "./components/TemplateLoader";
import PersonalInfo from "./components/PersonalInfo";
import EducationSection from "./components/EducationSection";
import PracticalExperiencesSection from "./components/PracticalExperiencesSection";
import Resume from "./components/Resume";
import exampleData from "./template-data";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [education, setEducation] = useState(exampleData.education);
  const [experiences, setExperience] = useState(exampleData.experiences);
  const [sectionOpen, setSectionOpen] = useState(null);
  const [prevState, setPrevState] = useState(null);
  const [sections, setSections] = useState({
    education: [...exampleData.education],
    experiences: [...exampleData.experiences],
  });
  const setOpen = (sectionName) => setSectionOpen(sectionName);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  function handleSectionChange(e) {
    const { key } = e.target.dataset;
    const inputValue = e.target.value;
    const form = e.target.closest(".section-form");
    const { id } = form;
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) obj[key] = inputValue;
        return obj;
      }),
    });
  }

  function createForm(arrayName, object) {
    setPrevState(null);
    const section = structuredClone(sections[arrayName]);
    section.push(object);
    setSections({ ...sections, [arrayName]: section });
  }

  const createEducationForm = () =>
    createForm("education", {
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: crypto.randomUUID(),
    });

  const createExperienceForm = () =>
    createForm("experiences", {
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
      id: crypto.randomUUID(),
    });

  function removeForm(e) {
    const form = e.target.closest(".section-form");
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    const { id } = form;

    setSections({
      ...sections,
      [arrayName]: section.filter((item) => item.id !== id),
    });
  }
  function cancelForm(e) {
    if (prevState == null) {
      removeForm(e);
      return;
    }

    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          form = prevState;
          form.isCollapsed = true;
        }

        return form;
      }),
    });
  }

  function toggleValue(e, key) {
    const sectionForm = e.target.closest(".section-form");
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset;
    const section = sections[arrayName];

    setSections({
      ...sections,
      [arrayName]: section.map((form) => {
        if (form.id === id) {
          setPrevState(Object.assign({}, form));
          form[key] = !form[key];
        }
        return form;
      }),
    });
  }
  const toggleCollapsed = (e) => toggleValue(e, "isCollapsed");

  const resumeRef = useRef();
  const handleDownload = () => {
    console.log("handle Download");
    const element = resumeRef.current;
    const opt = {
      margin: 0,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="app">
      <div className="edit-side-container">
        <TemplateLoader
          onTemplateLoad={() => {
            setPersonalInfo(exampleData.personalInfo);
            setSections({
              education: [...exampleData.education],
              experiences: [...exampleData.experiences],
            });
          }}
          onClear={() => {
            setPersonalInfo({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
            });
            setSections({ education: [], experiences: [] });
            setPrevState(null);
          }}
        />
        <PersonalInfo
          onChange={handlePersonalInfoChange}
          firstName={personalInfo.firstName}
          lastName={personalInfo.lastName}
          email={personalInfo.email}
          phone={personalInfo.phone}
        />
        <EducationSection
          education={sections.education}
          isOpen={sectionOpen === "Education"}
          setOpen={setOpen}
          onChange={handleSectionChange}
          createForm={createEducationForm}
          toggleCollapsed={toggleCollapsed}
          onCancel={cancelForm}
          onRemove={removeForm}
        />
        <PracticalExperiencesSection
          experiences={sections.experiences}
          isOpen={sectionOpen === "Experience"}
          setOpen={setOpen}
          onChange={handleSectionChange}
          createForm={createExperienceForm}
          toggleCollapsed={toggleCollapsed}
          onCancel={cancelForm}
          onRemove={removeForm}
        />
        <div className="download-button-container">
          <button onClick={handleDownload} className="download-resume">
            Download
          </button>
        </div>
      </div>
      <Resume
        ref={resumeRef}
        personalInfo={personalInfo}
        education={sections.education}
        experiences={sections.experiences}
      />
    </div>
  );
}

export default App;
