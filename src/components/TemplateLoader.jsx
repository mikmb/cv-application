import "./../styles/templateLoader.css";

function TemplateLoader({ onTemplateLoad, onClear }) {
  return (
    <div className="template-loader">
      <button onClick={onClear} className="clear-resume">
        <i className="fa-solid fa-trash"></i>
        Clear Resume
      </button>{" "}
      <button onClick={onTemplateLoad} className="load-example-data">
        Show Example
      </button>
    </div>
  );
}
export default TemplateLoader;
