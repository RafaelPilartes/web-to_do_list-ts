import { TbClipboardText } from 'react-icons/tb'

import {
  TasksContainer,
  TasksHeaderContainer,
  TasksListContainer
} from './styles'

import todoLogo from '../../assets/todoLogo.svg'
import Task from '../Task'
import { useTask } from '../../hooks/useTask'
import { useTheme } from 'styled-components'

function Tasks() {
  const { tasks, taskQuantity, completedTaskQuantity } = useTask()
  const { colors } = useTheme()

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

      <TasksListContainer>
        {taskQuantity !== 0 ? (
          listingTask
        ) : (
          <section className="empty">
            <TbClipboardText size={50} color={colors['gray-300']} />

            <div>
              <p> Você ainda não tem tarefas cadastradas </p>
              <span> Crie tarefas, e organize seus itens a fazer </span>
            </div>
          </section>
        )}
      </TasksListContainer>
    </TasksContainer>
  )
}

export default Tasks
