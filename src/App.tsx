import { ChakraProvider, Box } from '@chakra-ui/react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Results from './pages/Results'

function App() {
  return (
    <ChakraProvider>
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
          <Route path="/" element={<Navigate to="/hop2much" replace />} />
          <Route path="/hop2much" element={<Home />} />
          <Route path="/hop2much/quiz" element={<Quiz />} />
          <Route path="/hop2much/results" element={<Results />} />
        </Routes>
      </Box>
    </ChakraProvider>
  )
}

export default App
