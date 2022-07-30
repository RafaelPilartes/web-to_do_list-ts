export interface TaskProps {
  id: string
  title: string
  description: string
  isCompleted: boolean
  date: number
}

export interface ITask {
  task: TaskProps
}
