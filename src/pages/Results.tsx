import { Box, Button, Heading, Text, VStack, Circle, Center } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactConfetti from 'react-confetti'
import NavHeader from '../components/NavHeader'

const MotionBox = motion(Box)

interface LocationState {
  score: number
  total: number
}

const Results = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const state = location.state as LocationState

  const percentage = Math.round((state.score / state.total) * 100)

  const getFeedback = () => {
    if (percentage >= 80) return "🌟 Excellent! You're hopping like a champion!"
    if (percentage >= 60) return "👍 Good job! Keep practicing to improve!"
    return "💪 Keep trying! Practice makes perfect!"
  }

  return (
    <Box 
      w="100%" 
      minH="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      p={{ base: 4, md: 8 }}
      position="relative"
    >
      <NavHeader />
      {percentage >= 80 && (
        <Box position="fixed" top={0} left={0} right={0} bottom={0} zIndex={10}>
          <ReactConfetti 
            recycle={false} 
            numberOfPieces={200}
            width={window.innerWidth}
            height={window.innerHeight}
          />
        </Box>
      )}
      <VStack 
        spacing={8} 
        maxW={{ base: "90%", md: "600px" }} 
        w="full"
        mt={16}
      >
        <MotionBox
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.5 }}
          textAlign="center"
          w="full"
        >
          <Heading 
            as="h1" 
            size="2xl" 
            mb={4}
            bgGradient="linear(to-r, purple.500, purple.700)"
            bgClip="text"
          >
            Quiz Results
          </Heading>
          <Circle 
            size="200px" 
            bg="purple.100"
            position="relative"
            mb={6}
            mx="auto"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              textAlign="center"
              zIndex={2}
            >
              <Text 
                fontSize="4xl" 
                fontWeight="bold"
                bgGradient="linear(to-r, purple.500, purple.700)"
                bgClip="text"
              >
                {percentage}%
              </Text>
            </Box>
            <Circle
              size="200px"
              position="absolute"
              top="0"
              left="0"
              background={`conic-gradient(#805AD5 ${percentage}%, transparent ${percentage}%)`}
            />
          </Circle>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Text fontSize="xl" mt={6} mb={2} color="gray.700">
              You scored {state.score} out of {state.total}
            </Text>
            <Text fontSize="lg" color="gray.600" mb={8}>
              {getFeedback()}
            </Text>
          </MotionBox>
        </MotionBox>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            colorScheme="purple"
            size="lg"
            onClick={() => navigate(-1)}
            mr={4}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
            boxShadow="md"
          >
            Try Again
          </Button>
          <Button
            variant="outline"
            colorScheme="purple"
            size="lg"
            onClick={() => navigate('/')}
            _hover={{ transform: 'scale(1.05)', bg: 'purple.50' }}
            transition="all 0.2s"
            boxShadow="md"
          >
            Home
          </Button>
        </MotionBox>
      </VStack>
    </Box>
  )
}

export default Results 