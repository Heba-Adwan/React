
import { useState } from "react";

function ToDo() {

  let [todo, setTodo] = useState([])
  const [val, setNewVal] = useState('')

  const handleVal = (newTodo) => {
    setNewVal(newTodo)
  }

  return <div className='todo' >
    <h3>ToDo</h3>

    <input className='input' onChange={(e) => handleVal(e.target.value)}></input>
    <button className="addButton" onClick={() => setTodo([...todo, { id: todo.length + 1, p: val }])}>Add</button>
    <ul>
      {todo.map((e) =>
        <li  id={e.id} key={e.id}>
          {e.p}

          <button className="delButton"
            id={e.id}
            onClick={(e) => setTodo(todo.filter(todo => +todo.id !== +e.target.id))}>
            Delete
          </button>
        </li>
        )
        }
    </ul>
    <hr />
  </div>

}

export default ToDo;