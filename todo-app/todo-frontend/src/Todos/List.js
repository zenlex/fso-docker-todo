import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {

  return (
    <>
      {todos.map((todo, index) => {
        return <Todo key={todo._id} todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo}/>
      }).reduce((acc, cur) => [...acc, <hr key={acc.length}/>, cur], [])}
    </>
  )
}

export default TodoList
