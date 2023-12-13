export interface TaskProps {
  tasks: Array<{
    name: string
    completed: boolean
  }>
  onRemove: (name: string) => void
  onToggleCompleted: (name: string) => void
}
