import { useState } from 'react'
import './App.css'
import { GlobalStyles, darkTheme, lightTheme } from './styles/theme'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { store } from './app/store'
import { HomePage } from './pages/HomePage'

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyles />
            <Provider store={store}>
              <BrowserRouter>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                </Routes>
              </BrowserRouter>
            </Provider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

export default App
