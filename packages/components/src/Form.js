import React, { useState } from 'react'
import { TextInput, View, StyleSheet } from 'react-native'

const useInputState = () => {
  const [value, setValue] = useState('')

  return {
    value,
    onChangeText: text => setValue(text),
    reset: () => setValue(''),
  }
}

const Form = props => {
  const { value, reset, onChangeText } = useInputState('')

  const styles = StyleSheet.create({
    form: {
      width: 400,
      height: 100,
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

  const { newTodo } = props

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

export default Form
