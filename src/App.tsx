

import { useState } from 'react'
import './App.css'
import TodoItem from './TodoItem'

function App() {
 const [todos, setTodos] = useState<Todo[]>([])
 const [task, setTask] = useState('')

  return (
    <div>
      
    </div>
  )
}

export default App
