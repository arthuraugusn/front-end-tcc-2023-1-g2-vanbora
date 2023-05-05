import "./style.css";

export const InputContainerLogin = ({ props }) => {
  return (
    <div className={`input-container ${props.status_visibility}`}>
      <label htmlFor="password" className={props.classNameLabel}>
        {props.nameInput}
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className={props.classNameInput}
        value={props.value}
        disabled={props.status}
      />
    </div>
  );
};
