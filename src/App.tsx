import { Box } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'

function App() {
  return (
    <Box 
      minH="100vh" 
      w="100vw" 
      bg="gray.50" 
      margin="0" 
      padding="0" 
      display="flex" 
      flexDirection="column"
      overflow="hidden"
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Box>
  )
}

export default App
