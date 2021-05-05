import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Logo } from './Logo';
import { NotificationNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      maxWidth={1480}
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex align="center" ml="auto">
        <NotificationNav />
      </Flex>
      <Profile showProfileData={isWideVersion} />
    </Flex>
  );
}
