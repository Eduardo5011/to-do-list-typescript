

import { useState } from 'react'
import './App.css'
import {Todo} from './types'
import TodoItem from './TodoItem'


function App() {
 const [todos, setTodos] = useState<Todo[]>([])
 const [task, setTask] = useState('')

 const addTodo = () => {
  const newTodo: Todo = {id: Date.now(), task, completed: false}
  setTodos([...todos, newTodo])
  setTask('')
 }

 const toggleTodo = (id: number) => {
  setTodos(
    todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed}: todo)
  )
 }

 const removeTodo = (id: number) => {
  setTodos(todos.filter(todo => todo.id !== id))
 }

  return (
    <div className="App">
      <input value={task}
      onChange={(e) => setTask(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && task && addTodo()}
      placeholder="enter task"
      />
      <button onClick={() => task && addTodo()}>submit</button>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        todo={todo}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
        />
      ))}
    </div>
  )
}

export default App
