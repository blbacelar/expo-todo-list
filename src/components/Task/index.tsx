import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

interface TaskProps {
  task: {
    name: string
    completed: boolean
  }
  onRemove: () => void
  onToggleCompleted: () => void
}

const Task = ({ task, onRemove, onToggleCompleted }: TaskProps) => {
  const textStyle = task.completed ? styles.textChecked : styles.text

  return (
    <View style={styles.container}>
      <View style={styles.checkboxAndText}>
        <TouchableOpacity onPress={onToggleCompleted}>
          <Image
            source={
              task.completed
                ? require('../../../assets/check.png')
                : require('../../../assets/unchecked.png')
            }
            style={styles.checkboxIcon}
          />
        </TouchableOpacity>
        <Text style={textStyle}>{task.name}</Text>
      </View>
      <TouchableOpacity onPress={onRemove} style={styles.trashContainer}>
        <Image
          source={require('../../../assets/trash.png')}
          style={styles.trash}
        />
      </TouchableOpacity>
    </View>
  )
}

export default Task
