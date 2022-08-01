import { useState, KeyboardEvent, useEffect, useRef } from 'react'

import { AiOutlinePlusCircle } from 'react-icons/ai'

import { HeaderContainer, NewTaskFormContainer } from './styles'
import todoLogo from '../../assets/todoLogo.svg'
import { useTask } from '../../hooks/useTask'

interface TaskFormProps {
  title: string
  description: string
}

function Header() {
  const { addTask } = useTask()

  const [formTask, setFormTask] = useState<TaskFormProps>({
    title: '',
    description: ''
  })

  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault

    const newTask = {
      task: formTask
    }

    if (event.code === 'Enter' && formTask.title !== '') {
      addTask(newTask)
      setFormTask({
        ...formTask,
        title: ''
      })
    }
  }
  function createTask() {
    const newTask = {
      task: formTask
    }

    if (formTask.title !== '') {
      addTask(newTask)

      setFormTask({
        ...formTask,
        title: ''
      })
    }
  }

  useEffect(() => {}, [])

  return (
    <HeaderContainer>
      <img src={todoLogo}></img>

      <NewTaskFormContainer>
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={formTask.title}
          onChange={e =>
            setFormTask({
              ...formTask,
              title: e.target.value
            })
          }
          onKeyUp={handleKeyUp}
        />
        <button type="button" onClick={createTask}>
          <strong> Criar </strong>
          <AiOutlinePlusCircle size={20} />
        </button>
      </NewTaskFormContainer>
    </HeaderContainer>
  )
}

export default Header
