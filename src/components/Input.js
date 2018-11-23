import React, { Component } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 466px;
  padding: 16px 24px 16px 60px;
  border: none;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  font-size: 24px;
  margin-bottom: 5px;

  &::-webkit-input-placeholder {opacity: 0.3; font-style: italic}
  &::-moz-placeholder          {opacity: 0.3; font-style: italic}
  &:-moz-placeholder           {opacity: 0.3; font-style: italic}
  &:-ms-input-placeholder      {opacity: 0.3; font-style: italic}

  &:focus {
    outline: none
  }
`

const Input = React.forwardRef((props, ref) => {
  return (
    <form onSubmit={props.submit}>
      <StyledInput type="text" placeholder="What do you want?" ref={ref} />
    </form>
  )
})

export default Input