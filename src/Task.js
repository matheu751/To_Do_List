export const Task = (props) => {
  return (
    <div className="task" 
    style={{borderTop: props.completed ? "solid 6px #3abe7a" : "solid 6px red"}}>
      <h1> {props.taskName} </h1>
      <div className="buttons">
        <button className="btnConfirm" 
      onClick={() => props.completedTask(props.id)}> <iconify-icon icon="line-md:confirm-circle" width="30" height="30"></iconify-icon></button>
      <button className="btnTrash" 
      onClick={() => props.deleteTask(props.id)}> <iconify-icon icon="ph:trash" width="30" height="30"></iconify-icon> </button>
      </div>
      
    </div>
  )
}