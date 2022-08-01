import { TbClipboardText } from 'react-icons/tb'
import {
  arrayMove,
  SortableContainer,
  SortableElement,
  SortableHandle
} from 'react-sortable-hoc'

import {
  TasksContainer,
  TasksHeaderContainer,
  TasksListContainer
} from './styles'

import todoLogo from '../../assets/todoLogo.svg'
import Task from '../Task'
import { useTask } from '../../hooks/useTask'
import { useTheme } from 'styled-components'
import { useState } from 'react'

function Tasks() {
  const { tasks, taskQuantity, completedTaskQuantity, onSortEnd } = useTask()
  const { colors } = useTheme()

  const SortableList = SortableContainer(({ children }: any) => {
    return <div className="sortableContainer">{children}</div>
  })

  const SortableItem = SortableElement(({ value, index }: any) => (
    <Task key={index} task={value} />
  ))

  const listItems = tasks.map((value, index) => (
    <SortableItem key={`item-${value}`} index={index} value={value} />
  ))

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
          <SortableList onSortEnd={onSortEnd} useDragHandle>
            {listItems}
          </SortableList>
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
