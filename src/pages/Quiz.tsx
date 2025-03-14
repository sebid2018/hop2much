import { useState, useEffect } from 'react'
import { Box, Button, Heading, Text, VStack, Stack, Badge, Flex, IconButton, Tooltip } from '@chakra-ui/react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import ReactConfetti from 'react-confetti'
import { FaLightbulb } from 'react-icons/fa'
import NavHeader from '../components/NavHeader'
import QuizTimer from '../components/QuizTimer'
import { questions } from '../data/questions'

const MotionBox = motion(Box)

const Quiz = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const selectedAge = parseInt(searchParams.get('age') || '6')

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string>('')
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [shake, setShake] = useState(false)
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  const [hintsUsed, setHintsUsed] = useState(0)
  const [shownHints, setShownHints] = useState<string[]>([])

  const filteredQuestions = questions.filter(q => q.ageGroup === selectedAge)

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      navigate('/hop2much')
    } else {
      // Start the quiz after a short delay
      const timer = setTimeout(() => {
        setIsQuizStarted(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [filteredQuestions, navigate])

  const handleAnswer = () => {
    if (!showExplanation) {
      const isCorrect = parseInt(selectedAnswer) === filteredQuestions[currentQuestion].correctAnswer
      if (isCorrect) {
        setScore(score + 1)
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 3000)
      } else {
        setShake(true)
        setTimeout(() => setShake(false), 500)
      }
      setShowExplanation(true)
      return
    }

    setShowExplanation(false)
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
      // Reset hints for next question
      setHintsUsed(0)
      setShownHints([])
    } else {
      setIsQuizStarted(false)
      navigate('/hop2much/results', { state: { score, total: filteredQuestions.length } })
    }
  }

  const handleHint = () => {
    if (hintsUsed >= 3) return

    const currentQ = filteredQuestions[currentQuestion]
    if (!currentQ.hints || currentQ.hints.length === 0) return

    const nextHint = currentQ.hints[hintsUsed]
    setShownHints([...shownHints, nextHint])
    setHintsUsed(hintsUsed + 1)
  }

  if (filteredQuestions.length === 0) return null

  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100
  const currentQ = filteredQuestions[currentQuestion]

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
      <QuizTimer isRunning={isQuizStarted} />
      {showConfetti && (
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
        maxW="800px" 
        w="full"
        mt={16}
      >
        <Heading 
          as="h1" 
          size="2xl" 
          color="purple.600" 
          textAlign="center"
          bgGradient="linear(to-r, purple.500, purple.700)"
          bgClip="text"
        >
          Hop2Much Quiz
        </Heading>
        <Box h="4px" w="100%" bg="gray.100" borderRadius="full" overflow="hidden">
          <Box 
            h="100%" 
            w={`${progress}%`} 
            bg="purple.500" 
            transition="width 0.3s ease-in-out"
          />
        </Box>
        <MotionBox
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          p={{ base: 4, md: 6 }}
          bg="white"
          shadow="lg"
          borderRadius="xl"
          w="full"
        >
          <Flex gap={2} mb={4} align="center" justify="space-between">
            <Flex gap={2}>
              <Badge colorScheme={currentQ.difficulty === 'easy' ? 'green' : currentQ.difficulty === 'medium' ? 'yellow' : 'red'}>
                {currentQ.difficulty}
              </Badge>
              <Badge colorScheme="purple">{currentQ.category}</Badge>
              <Badge colorScheme="blue">{currentQ.ageGroup} years</Badge>
            </Flex>
            <Tooltip label={hintsUsed >= 3 ? "No more hints available" : "Get a hint"}>
              <IconButton
                aria-label="Get hint"
                icon={<FaLightbulb />}
                colorScheme="yellow"
                variant="outline"
                isDisabled={hintsUsed >= 3 || showExplanation}
                onClick={handleHint}
              />
            </Tooltip>
          </Flex>
          <Heading size="lg" mb={4} color="purple.600">
            Question {currentQuestion + 1} of {filteredQuestions.length}
          </Heading>
          {shownHints.length > 0 && (
            <VStack align="stretch" mb={6} spacing={2}>
              {shownHints.map((hint, index) => (
                <Box 
                  key={index}
                  p={3}
                  bg="yellow.50"
                  borderRadius="md"
                  borderLeft="4px solid"
                  borderColor="yellow.400"
                >
                  <Text color="yellow.800">
                    <strong>Hint {index + 1}:</strong> {hint}
                  </Text>
                </Box>
              ))}
            </VStack>
          )}
          <Text fontSize="xl" mb={8}>
            {currentQ.question}
          </Text>
          <Stack gap={4}>
            <AnimatePresence>
              {currentQ.options.map((option, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.2, delay: index * 0.1 }}
                >
                  <Button
                    variant={selectedAnswer === index.toString() ? "solid" : "outline"}
                    colorScheme={
                      showExplanation
                        ? index === currentQ.correctAnswer
                          ? "green"
                          : selectedAnswer === index.toString()
                          ? "red"
                          : "gray"
                        : "purple"
                    }
                    onClick={() => !showExplanation && setSelectedAnswer(index.toString())}
                    size="lg"
                    width="100%"
                    disabled={showExplanation}
                  >
                    {option}
                  </Button>
                </MotionBox>
              ))}
            </AnimatePresence>
          </Stack>
          {showExplanation && (
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              mt={4}
              p={4}
              bg="gray.50"
              borderRadius="md"
            >
              <Text fontSize="lg" color="gray.700">
                {currentQ.explanation}
              </Text>
            </MotionBox>
          )}
          <Flex justify="flex-end" mt={8}>
            <Button
              colorScheme="purple"
              size="lg"
              onClick={handleAnswer}
              disabled={!selectedAnswer && !showExplanation}
            >
              {showExplanation 
                ? currentQuestion === filteredQuestions.length - 1 
                  ? 'See Results' 
                  : 'Next Question'
                : 'Check Answer'}
            </Button>
          </Flex>
        </MotionBox>
      </VStack>
    </Box>
  )
}

export default Quiz 