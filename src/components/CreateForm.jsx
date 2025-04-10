function CreateForm({ onClick, buttonName }) {
  return (
    <button className="create-form" onClick={onClick}>
      <h3 className="button-content">
        <i className="fa-solid fa-plus"></i>
        {buttonName}
      </h3>
    </button>
  );
}

export default CreateForm;
