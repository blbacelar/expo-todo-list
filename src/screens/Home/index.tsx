import { useState } from 'react'
import {
  Alert,
  Image,
  Keyboard,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import theme from '../../../theme'
import { Header } from '../../components/Header'
import { TaskContainer } from '../../components/TaskContainer'
import { styles } from './styles'

export function Home() {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([
    { name: 'Task Example', completed: false },
    { name: 'Task Example Completed', completed: true }
  ])

  const handleTaskAdd = () => {
    if (tasks.some(task => task.name === text)) {
      return Alert.alert('Task exists', 'This task is already on the list.')
    }

    const newTask = {
      name: text,
      completed: false
    }
    setTasks(prevState => [...prevState, newTask])
    setText('')
    Keyboard.dismiss()
  }

  const handleTaskRemove = (name: string) => {
    Alert.alert('Remove', 'Are you sure you want to remove this task?', [
      {
        text: 'Yes',
        onPress: () =>
          setTasks(prevState => prevState.filter(task => task.name !== name))
      },
      {
        text: 'No',
        style: 'cancel'
      }
    ])
  }

  const handleToggleCompleted = (name: string) => {
    setTasks(prevState =>
      prevState.map(task =>
        task.name === name ? { ...task, completed: !task.completed } : task
      )
    )
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Add a new task"
            placeholderTextColor={theme.gray_300}
            onChangeText={setText}
            value={text}
            onSubmitEditing={handleTaskAdd}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleTaskAdd}
            activeOpacity={0.8}
          >
            <Image
              style={styles.plus}
              source={require('../../../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>
        <TaskContainer
          tasks={tasks}
          onRemove={handleTaskRemove}
          onToggleCompleted={handleToggleCompleted}
        />
      </View>
    </>
  )
}
