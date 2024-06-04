import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { IconType } from 'react-icons';
import { Outlet } from 'react-router-dom';
import React, { useEffect } from 'react';
import TopBar from '../components/TopBar/TopBar';
import ProfileImage from '../assets/images/10411979_10203296234399693_878618849183583347_n.jpg';
import { useNavigate, useLocation } from 'react-router-dom';

interface LinkItemProps {
  name: string;
  icon: IconType;
  id: string;
}
const LinkItems: Array<LinkItemProps> = [
  { name: 'Home', icon: FiHome, id: 'Home' },
  { name: 'Animas', icon: FiTrendingUp, id: 'Animas' },
  { name: 'Arkansas', icon: FiCompass, id: 'Arkansas' },
  { name: 'Blue', icon: FiStar, id: 'Blue' },
];

export default function SidebarWithHeader() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/Home');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return (
    <>
      <TopBar display={['none', 'flex']} onOpen={onOpen} />
      <Box
        className="hello-from-newroute"
        minH="100vh"
        bg={useColorModeValue('gray.100', 'gray.900')}
      >
        <SidebarContent
          onClose={onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        {/* mobilenav */}
        <MobileNav onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p={['none', '4']}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      paddingTop="2rem"
      {...rest}
    >
      <Flex
        h="3rem"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        marginBottom="2.5rem"
      >
        {/* <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Gold Medal Waters
        </Text> */}
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Box onClick={onClose}>
          <NavItem key={link.name} icon={link.icon}>
            <Link
              to={link.id}
              style={{
                textDecoration: 'none',
                fontSize: '0.75rem',
                lineHeight: '1.25rem',
                fontWeight: '700',
                fontFamily: 'Avenir Next, sans-serif',
              }}
            >
              {link.name}
            </Link>
          </NavItem>
        </Box>
      ))}
    </Box>
  );
};

interface NavItemProps {
  icon: IconType;
  children: React.ReactNode;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    // <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'cyan.400',
        color: 'white',
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
    // </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      display={{ base: 'flex', md: 'none' }}
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />
      {/* <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold"
      >
        Gold Medal Waters
      </Text> */}

      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="md"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'sm'} src={ProfileImage} />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.600">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};
