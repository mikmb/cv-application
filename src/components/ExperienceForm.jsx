import Input from "./Input";
import FormButtons from "./FormButtons";

function ExperienceForm(props) {
  const { companyName, title, description, startDate, endDate, id } =
    props.form;
  const { onChange, cancel, save, remove } = props;
  return (
    <form
      className="experience-form section-form"
      id={id}
      data-array-name="experiences"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input
        type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={companyName}
        onChange={onChange}
        data-key="companyName"
      />
      <Input
        type="text"
        id="title"
        labelText="Title"
        placeholder="Enter Title"
        value={title}
        onChange={onChange}
        data-key="title"
      />
      <div className="dates-group">
        <Input
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={startDate}
          onChange={onChange}
          data-key="startDate"
        />
        <Input
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={endDate}
          onChange={onChange}
          data-key="endDate"
        />
      </div>

      <Input
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={description}
        onChange={onChange}
        data-key="description"
        optional
      />
      <FormButtons save={save} cancel={cancel} remove={remove} />
    </form>
  );
}

export default ExperienceForm;
