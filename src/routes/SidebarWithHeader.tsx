// import {useDisclosure, Box, Drawer, DrawerContent} from '@chakra-ui/react';
// import {Outlet, useLocation} from 'react-router-dom';
// import SidebarContent from './SidebarContent';
// import TopBar from '../components/TopBar/TopBar';
// // import SidebarContent from '../SidebarContent/SidebarContent';
// // import MobileNav from '../MobileNav/MobileNav';

// // import useAppSelector from '../../../hooks/useAppSelector';

// const SidebarWithHeader = () => {
// //   const displayNavigation = useAppSelector(state => state.sidebar.display);
//   const displayNavigation = true;
//   const {isOpen, onClose, onOpen} = useDisclosure();
//   const location = useLocation();

//   return (
//     <Box>
//       {displayNavigation ? (
//         <Box minH="100vh" bg="white">
//           <SidebarContent onClose={() => onClose}  />
//           <Drawer
//             autoFocus={false}
//             isOpen={isOpen}
//             placement="left"
//             onClose={onClose}
//             returnFocusOnClose={false}
//             onOverlayClick={onClose}
//             size="full"
//           >
//             <DrawerContent>
//               <SidebarContent onClose={onClose} />
//             </DrawerContent>
//           </Drawer>
//           {/* mobilenav */}
//           <TopBar onOpen={onOpen} />
//           <Box
//             ml={{base: 0, md: 60}}
//             p="4"
            
//           >
//             <Outlet />
//           </Box>
//         </Box>
//       ) : (
//         <Box p="2.5rem" backgroundColor={location.pathname === '/shifts/create' ? 'red' : 'inherit'}>
//           <Outlet />
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default SidebarWithHeader;
