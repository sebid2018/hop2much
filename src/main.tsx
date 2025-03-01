import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// Add error logging
const root = document.getElementById('root')
console.log('Root element:', root)

if (!root) {
  throw new Error('Root element not found')
}

try {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <ChakraProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ChakraProvider>
    </React.StrictMode>
  )
  console.log('App rendered successfully')
} catch (error) {
  console.error('Error rendering app:', error)
}
