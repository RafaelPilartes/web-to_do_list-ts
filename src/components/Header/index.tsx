import { AiOutlinePlusCircle } from 'react-icons/ai'

import { HeaderContainer, NewTaskFormContainer } from './styles'
import todoLogo from '../../assets/todoLogo.svg'

function Header() {
  return (
    <HeaderContainer>
      <img src={todoLogo}></img>

      <NewTaskFormContainer>
        <input placeholder="Adicionar nova tarefa" />
        <button>
          <strong> Criar </strong>
          <AiOutlinePlusCircle size={20} />
        </button>
      </NewTaskFormContainer>
    </HeaderContainer>
  )
}

export default Header
