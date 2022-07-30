import { ThemeProvider } from 'styled-components'
import { TaskContextProvider } from './contexts/TaskContext'
import TodoList from './page/TodoList'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TaskContextProvider>
        <GlobalStyle />
        <TodoList />
      </TaskContextProvider>
    </ThemeProvider>
  )
}

export default App
