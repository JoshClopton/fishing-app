import {
  FlexProps,
  useColorModeValue,
  Flex,
  IconButton,
  HStack,
  Menu,
  MenuButton,
  VStack,
  Text,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import {FiMenu} from 'react-icons/fi';
import './TopBar.css';

// import {useAuth0} from '@auth0/auth0-react';
// import FacilitySelector from '../FacilitySelector/FacilitySelector';
// import {useGetLoggedInUserDetails} from '../../../gql/Users/queries';
// import {useLoggedInFacilityDetails} from '../../../gql/Facility/queries';
// import {setLoggedInUser} from '../../../slices/usersSlice';
// import useAppDispatch from '../../../hooks/useAppDispatch';

interface TopBarProps extends FlexProps {
  onOpen: () => void;
}

const TopBar = ({onOpen, ...rest}: TopBarProps) => {
//   const {user} = useAuth0();
//   const {data: loggedInUserDetails} = useGetLoggedInUserDetails(user?.iuaID);
//   const {data: loggedInFacilityDetails} = useLoggedInFacilityDetails(facilityIdFromAuth0);
//   const dispatch = useAppDispatch();

//   useEffect(() => {
//     const accessData = Array.isArray(loggedInUserDetails?.getUser.access)
//       ? loggedInUserDetails?.getUser.access[0]
//       : loggedInUserDetails?.getUser.access;
//     const userData = loggedInUserDetails?.getUser;
//     const facilityData = loggedInFacilityDetails?.getFacility;

//     const loggedInUser = [{...accessData, facilityId: facilityIdFromAuth0, 
//       firstName: userData?.firstName, 
//       lastName: userData?.lastName,
//       userId: userData?.id,
//       email: userData?.email,
//       legacyFacilityId: legacyFacilityIdFromAuth0,
//       faciliyName: facilityData?.name,
//       facilitySegment: facilityData?.segmentName,
//       facilityHomeMarket: facilityData?.homeMarketName,
//       facilitySelectionType: facilityData?.selection,
//     }];
//     dispatch(setLoggedInUser(loggedInUser));
//   }, [loggedInUserDetails, facilityIdFromAuth0, dispatch, legacyFacilityIdFromAuth0, loggedInFacilityDetails]);

  return (
    <Flex
      className="mobile-nav"
      ml={{base: 0, md: 60}}
      px={{base: 4, md: 4}}
      height="3.5rem"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth={['0px', '1px']}
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{base: 'space-between', md: 'flex-end'}}
      {...rest}
    >
      <IconButton
        display={{base: 'flex', md: 'none'}}
        onClick={onOpen}
        variant="unstyled"
        aria-label="open menu"
        icon={<FiMenu />}
        justifyContent="flex-start"
      />
      {/* <FacilitySelector /> */}

      <HStack spacing={{base: '0', md: '6'}}>
        <Flex alignItems="center">
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{boxShadow: 'none'}}
              _hover={{cursor: 'default'}}
              borderLeft="1px solid #E4E4E7"
            >
              <HStack marginLeft=".7rem">
                <VStack display={{base: 'none', md: 'flex'}} alignItems="flex-start" spacing="1px" ml="2">
                  <Text fontSize="sm" fontWeight="bold">
                    Email goes here
                  </Text>
                </VStack>

                {/* <Avatar
                  size="sm"
                  src="https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                /> */}
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem display={{base: 'flex', md: 'none'}}>Name</MenuItem>
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
