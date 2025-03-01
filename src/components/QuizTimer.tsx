import { useState, useEffect } from 'react'
import { Box, Text } from '@chakra-ui/react'

interface QuizTimerProps {
  isRunning: boolean
}

const QuizTimer = ({ isRunning }: QuizTimerProps) => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    let interval: number | null = null

    if (isRunning) {
      interval = window.setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)
    }

    return () => {
      if (interval) window.clearInterval(interval)
    }
  }, [isRunning])

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60)
    const remainingSeconds = totalSeconds % 60
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
  }

  return (
    <Box 
      position="fixed" 
      top={4} 
      right={4} 
      zIndex={20}
      bg="white"
      px={4}
      py={2}
      borderRadius="full"
      boxShadow="md"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        bgGradient="linear(to-r, purple.500, purple.700)"
        bgClip="text"
      >
        {formatTime(seconds)}
      </Text>
    </Box>
  )
}

export default QuizTimer 