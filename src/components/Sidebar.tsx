import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from 'react-icons/ri';

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >
            geral
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" aling="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
          </Stack>
          <Link display="flex" aling="center">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Usuários
            </Text>
          </Link>
        </Box>
        <Box>
          <Text
            fontWeight="bold"
            color="gray.400"
            fontSize="small"
            textTransform="uppercase"
          >
            automação
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <Link display="flex" aling="center">
              <Icon as={RiDashboardLine} fontSize="20" />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </Link>
          </Stack>
          <Link display="flex" aling="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">
              Automação
            </Text>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
}
