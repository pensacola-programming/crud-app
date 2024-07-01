
export const ToDoListCheckbox = () => {
  const [checked, setChecked] = React.useState(false);
  
  const handleChange = () => {
    setChecked(!checked);
  }
  return (
    <div>
    <label>
      <Checkbox 
      label= "My value"
      value= {checked}
      onChange={handleChange}
      />

      </label>
      <p>Is my value checked? {checked.toString()}</p>
    </div>
  
  );
};
const Checkbox = ({label, value, onChange}) => {
  return(
    <label>
      <input type="checkbox" checked={value} onChange={onChange} />
      {label}
    </label>
  )
}
