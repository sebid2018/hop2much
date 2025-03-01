import { Box, Button, Heading, Text, VStack, Select } from '@chakra-ui/react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import NavHeader from '../components/NavHeader'

const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedAge, setSelectedAge] = useState('6')
  const showBackButton = location.pathname !== '/hop2much'

  return (
    <Box 
      w="100%" 
      h="100vh" 
      display="flex" 
      alignItems="center" 
      justifyContent="center"
      position="relative"
    >
      {showBackButton && <NavHeader />}
      <VStack 
        spacing={8} 
        maxW={{ base: "90%", md: "600px" }} 
        w="full" 
        p={4}
        mt={showBackButton ? 16 : 0}
      >
        <Box 
          fontSize={{ base: "96px", md: "120px" }} 
          lineHeight="1"
          transform="translateY(0)"
          _hover={{ transform: "translateY(-10px)" }}
          transition="transform 0.3s ease"
        >
          🦘
        </Box>
        <Heading 
          as="h1" 
          size="2xl" 
          color="purple.600" 
          textAlign="center"
          bgGradient="linear(to-r, purple.500, purple.700)"
          bgClip="text"
        >
          Hop2Much
        </Heading>
        <Text 
          fontSize="xl" 
          textAlign="center"
          color="gray.700"
        >
          Welcome to Hop2Much! Practice your math skills and prepare for the Kangaroo Math Test in a fun and interactive way.
        </Text>
        <Select
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
          size="lg"
          maxW="200px"
          variant="filled"
          bg="white"
          borderColor="purple.200"
          _hover={{ borderColor: "purple.300" }}
        >
          <option value="6">6 Years Old</option>
          <option value="7">7 Years Old</option>
          <option value="8">8 Years Old</option>
          <option value="9">9 Years Old</option>
          <option value="10">10 Years Old</option>
        </Select>
        <Button
          colorScheme="purple"
          size="lg"
          onClick={() => navigate(`/hop2much/quiz?age=${selectedAge}`)}
          _hover={{ transform: 'scale(1.05)', bg: 'purple.500' }}
          transition="all 0.2s"
          w="200px"
          boxShadow="md"
        >
          Start Practice
        </Button>
      </VStack>
    </Box>
  )
}

export default Home 