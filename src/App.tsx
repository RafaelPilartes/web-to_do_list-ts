import { ThemeProvider } from 'styled-components'
import TodoList from './page/TodoList'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TodoList />
    </ThemeProvider>
  )
}

export default App
