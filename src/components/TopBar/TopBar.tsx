import {
  FlexProps,
  useColorModeValue,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  VStack,
  MenuList,
  MenuItem,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import ProfileImage from '../../assets/images/10411979_10203296234399693_878618849183583347_n.jpg';

import { FiMenu } from 'react-icons/fi';
import './TopBar.css';

interface TopBarProps extends FlexProps {
  onOpen: () => void;
}

const TopBar = ({ onOpen, ...rest }: TopBarProps) => {
  return (
    <Flex
      className="mobile-nav"
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="3.5rem"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth={['0px', '1px']}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="unstyled"
        aria-label="open menu"
        icon={<FiMenu />}
        justifyContent="flex-start"
      />
      {/* <FacilitySelector /> */}

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
              _hover={{ cursor: 'default' }}
              borderLeft="1px solid #E4E4E7"
            >
              <HStack marginLeft=".7rem">
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Heading
                    fontSize="0.75rem"
                    lineHeight="1.25rem"
                    fontWeight="700"
                    fontFamily="Avenir Next, sans-serif"
                  >
                    Josh Clopton
                  </Heading>
                </VStack>

                <Avatar size="sm" src={ProfileImage} />
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem display={{ base: 'flex', md: 'none' }}>Name</MenuItem>
              <MenuItem
                onClick={() => {
                  console.log('sign out');
                }}
              >
                Sign out
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};

export default TopBar;
