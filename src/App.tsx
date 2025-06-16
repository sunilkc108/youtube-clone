import { ThemeProvider } from "./context/AnotherContext"
import HomePage from "./pages/HomePage"


const App = () => {
  return (
    <ThemeProvider>
      <HomePage />
    </ThemeProvider>
  )
}

export default App