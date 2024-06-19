import ToDoListCheckbox from "./ToDoListCheckbox";
import ToDoListDelete from "./ToDoListDelete";
import ToDoListDescription from "./ToDoListDescription";

export default function ToDoListItem({ title, completed }) {
  // Logic goes here
  return (
    <li>
      <ToDoListCheckbox />
      <ToDoListDescription title={title} />
      <ToDoListDelete />
    </li>
  )
}