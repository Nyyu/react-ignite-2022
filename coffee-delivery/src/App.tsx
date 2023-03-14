// Styled components
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.styles'
import { defaultTheme } from './styles/themes/defaultTheme'

// Router components
import { BrowserRouter as Router } from 'react-router-dom'
import { DefaultRoutes } from './Routes'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <DefaultRoutes />
      </Router>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
