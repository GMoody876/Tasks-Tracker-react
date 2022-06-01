import Task from "./Task"

const Tasks = ({ tasks, onDelete, onRemind }) => {
   
  return (
    <span className="tasks">
      {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} onRemind={onRemind} />))}
    </span>
    
  )
}

export default Tasks
