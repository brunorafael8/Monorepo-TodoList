import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Form from './Form'

const useTodoState = () => {
  const [todos, setTodos] = useState([])

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText])
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter(index => index !== todoIndex)

      setTodos(newTodos)
    },
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([])
  console.log(todos)
  return (
    <View style={styles.container}>
      <Text>Dale dele dele doly</Text>
      <Form newTodo={todoText => addTodo(todoText)} />
      {todos.map(todo => (
        <Text>{todo}</Text>
      ))}
    </View>
  )
}

export default App
