import React from 'react'

import Todo from 'components/Todo'

const List = ({ todos }) => {
  return (
    <>
      {todos.map((i, n) => (
        <Todo key={n} id={n} status={i.status}>{i.text}</Todo>
      ))}
    </>
  )
}

export default List