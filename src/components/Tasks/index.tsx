import { AiOutlinePlusCircle } from 'react-icons/ai'

import {
  TasksContainer,
  TasksHeaderContainer,
  TasksListContainer
} from './styles'
import todoLogo from '../../assets/todoLogo.svg'
import Task from '../Task'
import { useTask } from '../../hooks/useTask'

function Tasks() {
  const { tasks, taskQuantity, completedTaskQuantity } = useTask()

  const listingTask = tasks.map((item, index) => {
    return <Task key={index} task={item} />
  })

  return (
    <TasksContainer>
      <TasksHeaderContainer>
        <div>
          <p> Tarefas criadas </p>
          <span> {taskQuantity} </span>
        </div>

        <div>
          <p className="purple"> Concluídas </p>
          <span>
            {completedTaskQuantity} de {taskQuantity}
          </span>
        </div>
      </TasksHeaderContainer>

      <TasksListContainer>{listingTask}</TasksListContainer>
    </TasksContainer>
  )
}

export default Tasks
