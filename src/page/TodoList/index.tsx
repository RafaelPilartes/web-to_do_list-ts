import Header from '../../components/Header'
import Tasks from '../../components/Tasks'
import { TodoListContainer } from './styles'

function TodoList() {
  return (
    <TodoListContainer>
      <Header />
      <Tasks />
    </TodoListContainer>
  )
}

export default TodoList
