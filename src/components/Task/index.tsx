import { AiFillDelete, AiFillEye } from 'react-icons/ai'
import { SortableHandle } from 'react-sortable-hoc'

import { BsCheckCircleFill } from 'react-icons/bs'
import { MdOutlineDragIndicator } from 'react-icons/md'

import { useTheme } from 'styled-components'
import { useTask } from '../../hooks/useTask'
import { ITask } from '../../interface/ITask'

import { ActionsContainer, CheckContainer, TaskContainer } from './styles'

function Task({ task }: ITask) {
  const { colors } = useTheme()
  const { deleteTask, toggleTaskIsCompledById } = useTask()

  const DragHandle = SortableHandle(() => (
    <span className="iconDrop">
      <MdOutlineDragIndicator color={colors['gray-200']} size={24} />
    </span>
  ))

  function removeTask() {
    deleteTask(task.id)
  }
  function toggleTask() {
    toggleTaskIsCompledById(task.id)
  }

  return (
    <TaskContainer>
      <div>
        <DragHandle />

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
