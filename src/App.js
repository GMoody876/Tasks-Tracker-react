import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from 'react';


function App() {

  const [showAddBtn, setShowAddBtn] = useState(false)

  const [tasks, setTasks] = useState([{
    id: 1,
    text: 'Meeting',
    day: 'Feb 5th at 2:00am',
    reminder: true
},{
  id: 2,
  text: 'Doctors Appointment',
  day: 'Feb 6th at 3:00pm',
  reminder: true
}])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleRem = (id) => {
    setTasks(
      tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddBtn(!showAddBtn)} 
      showAdd={showAddBtn}/>
      {showAddBtn && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onRemind={toggleRem} /> : "No Tasks to show"}
    </div>
  );
}

export default App;
