import React, { useState } from "react"
import NewTodo from "./components/NewTodo"
import TodoList from "./components/TodoList"
import { Todo } from "./todo.model"

const App: React.FC = () => {
  const [todos, setTodo] = useState<Todo[]>([])

  const todoAddHandler = (text: string) => {
    setTodo(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
  }

  const deleteTodoHandler = (todoId: string) => {
    setTodo(prevTodos => {
      return prevTodos.filter(todo => {
        return todo.id !== todoId
      })
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={ todoAddHandler}/>
      <TodoList items={todos} onDeleteTodo={deleteTodoHandler}/>
    </div>
  )
}
  
export default App