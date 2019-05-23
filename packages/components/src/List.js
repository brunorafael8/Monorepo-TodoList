import React from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'

const List = props => {
  const styles = StyleSheet.create({
    list: {
      width: 400,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    item: {
      color: '#000000',
      fontSize: 16,
    },
    delete: {
      color: 'red',
      fontSize: 16,
    },
  })

  const { todos, deleteTodo } = props

  return todos.map((todo, i) => (
    <View style={styles.list}>
      <Text style={styles.item}>{todo}</Text>
      <TouchableOpacity onPress={() => deleteTodo(i)}>
        <Text style={styles.delete}>Deletar</Text>
      </TouchableOpacity>
    </View>
  ))
}

export default List
