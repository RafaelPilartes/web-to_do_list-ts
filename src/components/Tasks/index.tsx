import { AiOutlinePlusCircle } from 'react-icons/ai'

import {
  TasksContainer,
  TasksHeaderContainer,
  TasksListContainer
} from './styles'
import todoLogo from '../../assets/todoLogo.svg'
import Task from '../Task'

function Tasks() {
  const taskData = [
    {
      id: 1,
      title: 'Lavar',
      description: 'Qualquer coisa'
    },
    {
      id: 2,
      title: 'Passar a ferro',
      description: 'Qualquer coisa'
    },
    {
      id: 3,
      title: 'Engomar',
      description: 'Qualquer coisa'
    },
    {
      id: 4,
      title: 'Varrer',
      description: 'Qualquer coisa'
    },
    {
      id: 5,
      title: 'Limpar',
      description: 'Qualquer coisa'
    },
    {
      id: 6,
      title: 'Tirar o pó',
      description: 'Qualquer coisa'
    }
  ]

  const listingTask = taskData.map((item, index) => {
    return <Task key={index} task={item} />
  })

  return (
    <TasksContainer>
      <TasksHeaderContainer>
        <div>
          <p> Tarefas criadas </p>
          <span> 10 </span>
        </div>

        <div>
          <p className="purple"> Concluídas </p>
          <span> 5 de 10 </span>
        </div>
      </TasksHeaderContainer>

      <TasksListContainer>{listingTask}</TasksListContainer>
    </TasksContainer>
  )
}

export default Tasks
