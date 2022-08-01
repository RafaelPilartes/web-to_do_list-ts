import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useTheme } from 'styled-components'
import { useTask } from '../../hooks/useTask'
import { ITask } from '../../interface/ITask'

import { ActionsContainer, CheckContainer, TaskContainer } from './styles'

function Task({ task }: ITask) {
  const { colors } = useTheme()
  const { deleteTask, toggleTaskIsCompledById } = useTask()

  function removeTask() {
    deleteTask(task.id)
  }
  function toggleTask() {
    toggleTaskIsCompledById(task.id)
  }

  return (
    <TaskContainer>
      <div>
        <CheckContainer onClick={toggleTask}>
          {task.isCompleted ? (
            <BsCheckCircleFill size={18} color={colors['purple-dark']} />
          ) : (
            <div />
          )}
        </CheckContainer>
        <p className={task.isCompleted ? 'textCompleted' : ''}>{task.title}</p>
      </div>

      <ActionsContainer>
        <button>
          <AiFillEye size={24} />
        </button>
        <button onClick={removeTask}>
          <AiFillDelete size={24} />
        </button>
      </ActionsContainer>
    </TaskContainer>
  )
}

export default Task
