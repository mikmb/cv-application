function CollapsedForm(props) {
  const { onClick, title, arrayName } = props;
  const { id } = props.form;
  return (
    <button
      className="collapsed-form section-form"
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="collapsed-form-title">{title}</p>
    </button>
  );
}

export default CollapsedForm;
