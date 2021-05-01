import { HStack, Button, Box } from '@chakra-ui/react';

export function Pagination() {
  return (
    <HStack mt="8" justify="space-between" align="center" spacing="6">
      <Box>
        <strong>1</strong> - <strong>4</strong> de <strong>4</strong>
      </Box>
      <HStack>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          colorScheme="pink"
          _disabled={{
            bg: 'pink.500',
            cursor: 'default',
          }}
          disabled
        >
          1
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{ bg: 'gray.500' }}
        >
          2
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{ bg: 'gray.500' }}
        >
          3
        </Button>
        <Button
          size="sm"
          fontSize="xs"
          w="4"
          bg="gray.700"
          _hover={{ bg: 'gray.500' }}
        >
          4
        </Button>
      </HStack>
    </HStack>
  );
}
