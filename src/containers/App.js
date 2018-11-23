import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import styled from 'styled-components'

import Header from 'components/Header'
import Input from 'components/Input'
import List from 'components/List'

import { Provider, Consumer } from 'state/context'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class AppContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: []
    }

    this.inputRef = (e) => {
      this.input = e
    } 

    this.submit = this.submit.bind(this)
    this.remove = this.remove.bind(this)
    this.done = this.done.bind(this)
  }
  
  componentWillMount = () => {
    this.setState({ todos: JSON.parse(window.localStorage.getItem('todos')) || [] })
  }

  shouldComponentUpdate = (nextProps, nextState) => {
    window.localStorage.setItem('todos', JSON.stringify(nextState.todos))

    return true
  }

  submit(e) {
    e.preventDefault()
    const text = this.input.value
    if (text === '') return false
    this.setState(prevState => {
      return {
        todos: [ { text, status: false }, ...prevState.todos ]
      }
    })
    this.input.value = ''
  }

  remove(e, id) {
    e.preventDefault()
    this.setState(prevState => {
      prevState.todos.splice(id, 1)
      return {
        todos: [ ...prevState.todos ]
      }
    })
  }

  done(e, id) {
    e.preventDefault()
    const status = !this.state.todos[id].status
    this.setState(prevState => {
      prevState.todos[id].status = status
      return {
        todos: [ ...prevState.todos ]
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <Header>Todo App</Header>
        <Input submit={this.submit} ref={this.inputRef} />
        <Provider value={{ remove: this.remove, done: this.done }}>
          <List todos={this.state.todos}></List>
        </Provider>
      </Wrapper>   
    )
  }
}

export default hot(module)(AppContainer)