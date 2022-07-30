import { useContext } from 'react'
import { TaskContext } from '../contexts/TaskContext'

export function useTask() {
  const context = useContext(TaskContext)

  return context
}
