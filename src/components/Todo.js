import React from 'react'
import styled from 'styled-components'

import { Consumer } from 'state/context'

export default ({ children, id, status}) => {
  return (
    <Todo>
      <Consumer>
      {
        ({ remove, done }) =>
        <>
          <span className={status ? 'check active' : 'check'} onClick={e => done(e, id)}>✓</span>
          <span className={status ? 'task done' : 'task'}>{children}</span>
          <span className="delete" onClick={e => remove(e, id)}>×</span>
        </>
      } 
      </Consumer>
    </Todo>
  )
}

const Todo = styled.div`
  width: 530px;
  min-height: 40px;
  margin: 5px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  font-size: 24px;

  .check {
    margin-left: 10px;
    color: transparent;
    font-weight: 300;
    width: 24px;
    height: 24px;
    text-align: center;
    background: transparent; 
    border: 0.5px solid #d9d9d9;
    border-radius: 100%;
    cursor: pointer;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &.active {
      color: rgba(0, 153, 0, 0.7);
      
    }
  }
  .task {
    background: transparent; 
    margin-left: 15px;
    flex: 2;
    word-wrap: break-word;
    &.done {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
  .delete {
    background: transparent; 
    color: rgba(175,47,47,0.7);
    margin-right: 10px;
    margin-left: 10px;
    cursor: pointer;
    font-size: 28px;

    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    &:hover {
      color: rgba(175,47,47,0.9);
    }
  }
`