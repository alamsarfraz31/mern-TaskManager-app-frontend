import {FaCheckDouble, FaEdit, FaRegTrashAlt} from "react-icons/fa"

const Task = ({task, index, deleteTask, getSingleTask, setToCompelete}) => {
  return (
    <div className={task.complete ? "green" : "task"}>
      <p>
        <b>{index + 1}. </b>
         {task.name}
      </p>
      
      <div className="task-icons">
        <FaCheckDouble color="green" onClick={()=> setToCompelete(task)}/>
        <FaEdit color="purple" onClick={()=> getSingleTask(task)}/>
        <FaRegTrashAlt color="red" onClick={()=> deleteTask(task._id)}/>
      </div>
    </div>
    
  )
}

export default Task