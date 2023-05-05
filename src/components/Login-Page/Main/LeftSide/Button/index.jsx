import "./style.css";

export const ButtonEntrar = ({ props }) => {
  return (
    <button key={props.key} className="button" type="button">
      {props.label}
    </button>
  );
};
