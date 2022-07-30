import { createContext, useEffect, useState } from 'react'

import { v4 as uuid } from 'uuid'

import { IChildren } from '../interface/IChildren'
import { TaskProps, ITask } from '../interface/ITask'

interface TaskContextType {
  tasks: TaskProps[]
  taskQuantity: number
  completedTask: TaskProps[]
  completedTaskQuantity: number
  addTask: (task: ITask) => void
  deleteTask: (task: ITask) => void
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({ children }: IChildren) {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const unique_id = uuid()
  const small_id = unique_id.slice(0, 8)

  const taskQuantity = tasks.length
  const completedTask = tasks.filter(task => task.isCompleted)
  const completedTaskQuantity = completedTask.length

  function addTask({ task }: ITask) {
    setTasks([...tasks, task])
  }
  function deleteTask({ task }: ITask) {}

  useEffect(() => {}, [])
  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskQuantity,
        completedTask,
        completedTaskQuantity,
        addTask,
        deleteTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
