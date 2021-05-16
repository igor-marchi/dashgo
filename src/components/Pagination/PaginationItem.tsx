import { Button, ButtonProps } from '@chakra-ui/react';

interface PaginationItemProps extends ButtonProps {
  number: number;
  isCurrent?: boolean;
  onPageChenge: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChenge,
  ...rest
}: PaginationItemProps) {
  if (isCurrent) {
    return (
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
        {...rest}
      >
        {number}
      </Button>
    );
  } else {
    return (
      <Button
        size="sm"
        fontSize="xs"
        w="4"
        bg="gray.700"
        _hover={{ bg: 'gray.500' }}
        onClick={() => onPageChenge(number)}
        {...rest}
      >
        {number}
      </Button>
    );
  }
}
