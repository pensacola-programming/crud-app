import ToDoListItem from "./ToDoListItem"

export default function ToDoList() {
  const fakeData = [
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Buy eggs', completed: true },
    { id: 3, title: 'Buy bread', completed: false },
    { id: 4, title: 'Buy butter', completed: false },
    { id: 5, title: 'Buy cheese', completed: true },
    { id: 6, title: 'Buy yogurt', completed: false }
  ]
  return (
    <div className="to-do-list">
      <h1>To Do List</h1>
      <ul>
        { fakeData.map((item) => (<ToDoListItem key={item.id} title={item.title} completed={item.completed} />)) }
      </ul>
    </div>
  )
}