import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { TaskProps } from '../../types/tasks'
import Task from '../Task'
import { styles } from './styles'

export function TaskContainer({
  tasks,
  onRemove,
  onToggleCompleted
}: TaskProps) {
  const [createCount, setCreatedCount] = useState(tasks.length)
  const [completedCount, setCompletedCount] = useState(
    tasks.filter(task => task.completed).length
  )

  useEffect(() => {
    setCreatedCount(tasks.length)
    setCompletedCount(tasks.filter(task => task.completed).length)
  }, [tasks])

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusGroupLeft}>
          <Text style={styles.created}>Created </Text>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{createCount}</Text>
          </View>
        </View>
        <View style={styles.statusGroupRight}>
          <Text style={styles.completed}>Completed </Text>
          <View style={styles.countContainer}>
            <Text style={styles.countText}>{completedCount}</Text>
          </View>
        </View>
      </View>

      <View style={styles.separator} />

      <FlatList
        data={tasks}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Image
              style={styles.emptyImage}
              source={require('../../../assets/Clipboard.png')}
            />
            <Text style={styles.emptyListText}>
              You still don't have any tasks created
            </Text>
            <Text style={styles.emptyListSubtext}>
              Create tasks and organize your todo items
            </Text>
          </View>
        )}
        keyExtractor={item => `task-${item.name}`}
        renderItem={({ item }) => (
          <Task
            task={item}
            onRemove={() => onRemove(item.name)}
            onToggleCompleted={() => onToggleCompleted(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
