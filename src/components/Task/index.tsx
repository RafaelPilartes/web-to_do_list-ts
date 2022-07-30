import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import { ITask } from '../../interface/ITask'

import { ActionsContainer, CheckContainer, TaskContainer } from './styles'

function Task({ task }: ITask) {
  return (
    <TaskContainer>
      <div>
        <CheckContainer>
          <div />
        </CheckContainer>
        <p>{task.title}</p>
      </div>

      <ActionsContainer>
        <button>
          <AiFillEye size={24} />
        </button>
        <button>
          <AiFillDelete size={24} />
        </button>
      </ActionsContainer>
    </TaskContainer>
  )
}

export default Task
