import { Box, IconButton } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

const NavHeader = () => {
  const navigate = useNavigate()

  return (
    <Box position="fixed" top={4} left={4} zIndex={20}>
      <IconButton
        aria-label="Go back"
        icon={<span style={{ fontSize: '24px' }}>←</span>}
        onClick={() => navigate(-1)}
        colorScheme="purple"
        variant="ghost"
        size="lg"
        borderRadius="full"
        _hover={{ bg: 'purple.100' }}
      />
    </Box>
  )
}

export default NavHeader 