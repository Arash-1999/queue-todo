// cusotomizable input component

const TextField = (props) => {
  return (
    <label>
      {props.label}
      <input 
        min={props.min}
        max={props.max}
        data-key={props.inputKey}
        className={props.clsName}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}/>
      </label>
  );
};

export default TextField;
