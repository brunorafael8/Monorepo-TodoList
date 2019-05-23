import React, { useState } from 'react'
import { TextInput, View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const useInputState = () => {
  const [value, setValue] = useState('')

  return {
    value,
    onChangeText: text => {
      setValue(text)
    },
    reset: () => setValue(''),
  }
}

const TodoForm = ({ newTodo }) => {
  const { value, reset, onChangeText } = useInputState('')

  console.log(value)
  const styles = StyleSheet.create({
    form: {
      width: 400,
      height: 300,
      alignItems: 'flex-end',
      marginTop: 40,
    },
    input: {
      borderColor: '#000000',
      borderWidth: 2,
      borderRadius: 15,
      width: '100%',
      height: 40,
    },
  })

  return (
    <View style={styles.form}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        onSubmitEditing={() => {
          newTodo(value)
          reset()
        }}
      />
    </View>
  )
}
export default TodoForm
