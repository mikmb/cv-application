import Input from "./Input";
import FormButtons from "./FormButtons";

function EducationForm(props) {
  const { schoolName, degree, startDate, endDate, id } = props.form;
  const { onChange, cancel, save, remove } = props;
  return (
    <form
      className="education-form section-form"
      id={id}
      data-array-name="education"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter school/university name"
        value={schoolName}
        onChange={onChange}
        data-key="schoolName"
      />
      <Input
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree"
        value={degree}
        onChange={onChange}
        data-key="degree"
      />
      <Input
        type="text"
        id="date"
        labelText="Start Date"
        placeholder="Enter start date"
        value={startDate}
        onChange={onChange}
        data-key="startDate"
      />
      <Input
        type="text"
        id="date"
        labelText="End Date"
        placeholder="Enter end date"
        value={endDate}
        onChange={onChange}
        data-key="endDate"
      />
      <FormButtons remove={remove} cancel={cancel} save={save} />
    </form>
  );
}

export default EducationForm;
