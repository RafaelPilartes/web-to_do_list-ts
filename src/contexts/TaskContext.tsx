import { createContext, useEffect, useState } from 'react'
import { arrayMove } from 'react-sortable-hoc'

import { v4 as uuid } from 'uuid'

import { IChildren } from '../interface/IChildren'
import { TaskProps, ITask } from '../interface/ITask'

const LOCAL_STORAGE_key = 'todo:saveTasks'

interface TaskContextType {
  tasks: TaskProps[]
  taskQuantity: number
  completedTask: TaskProps[]
  completedTaskQuantity: number
  addTask: (task: TaskForm) => void
  deleteTask: (task: string) => void
  toggleTaskIsCompledById: (task: string) => void
  onSortEnd: (task: any) => void
}

interface TaskFormProps {
  title: string
  description: string
}
interface TaskForm {
  task: TaskFormProps
}

export const TaskContext = createContext({} as TaskContextType)

export function TaskContextProvider({ children }: IChildren) {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const unique_id = uuid()
  const small_id = unique_id.slice(0, 11)

  const taskQuantity = tasks.length
  const completedTask = tasks.filter(task => task.isCompleted)
  const completedTaskQuantity = completedTask.length

  function loadSaveTask() {
    const saved = localStorage.getItem(LOCAL_STORAGE_key)

    if (saved) {
      setTasks(JSON.parse(saved))
    }
  }

  function setTaskAndSave(newTask: TaskProps[]) {
    setTasks(newTask)
    localStorage.setItem(LOCAL_STORAGE_key, JSON.stringify(newTask))
  }

  function addTask({ task }: TaskForm) {
    setTaskAndSave([
      ...tasks,
      {
        id: small_id,
        title: task.title,
        description: task.description,
        isCompleted: false,
        date: 1659195528
      }
    ])
  }
  function deleteTask(taskId: string) {
    const newTask = tasks.filter(task => task.id !== taskId)
    setTaskAndSave(newTask)
  }
  function toggleTaskIsCompledById(taskId: string) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }

      return task
    })

    setTaskAndSave(newTasks)
  }

  const onSortEnd = (e: any) => {
    const newTodos = arrayMove(tasks, e.oldIndex, e.newIndex)
    setTaskAndSave(newTodos)
  }

  useEffect(() => {
    loadSaveTask()
  }, [])

  return (
    <TaskContext.Provider
      value={{
        tasks,
        taskQuantity,
        completedTask,
        completedTaskQuantity,
        addTask,
        deleteTask,
        toggleTaskIsCompledById,
        onSortEnd
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
