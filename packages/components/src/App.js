import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Form from './Form'
import List from './List'

const useTodoState = () => {
  const [todos, setTodos] = useState([])

  return {
    todos,
    addTodo: todoText => {
      setTodos([...todos, todoText])
    },
    deleteTodo: todoIndex => {
      const newTodos = todos.filter((_, index) => index !== todoIndex)

      setTodos(newTodos)
    },
  }
}

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([])

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
    },
  })

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TODO</Text>
      <Form newTodo={todoText => addTodo(todoText)} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </View>
  )
}

export default App
