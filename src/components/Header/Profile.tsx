import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Marchi</Text>
          <Text color="gray.300" fontSize="small">
            igoraugustomarchi@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Marchi"
        src="https://github.com/igor-marchi.png"
      />
    </Flex>
  );
}
