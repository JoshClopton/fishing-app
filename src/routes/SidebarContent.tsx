// import {Box, Flex, CloseButton, useColorModeValue, BoxProps} from '@chakra-ui/react';
// import {IconType} from 'react-icons';
// import {AiOutlineCalendar} from 'react-icons/ai';
// import {CiViewTable} from 'react-icons/ci';
// import {FiSettings} from 'react-icons/fi';
// import ndLogo from '../../public/BrainFlix-logo.svg';
// // import useAppSelector from '../../../hooks/useAppSelector';
// // import ndLogo from '../../../../assets/logo/logo-white-1.svg';
// import NavItem from '../routes/NavItem';
// // import ContactUs from '../ContactUs/ContactUs';

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
//   url?: string;
//   onClick?: unknown;
// }

// const SidebarContent = ({onClose, ...rest}: SidebarProps) => {

//   const linkItems: Array<LinkItemProps> = [
//     {
//       name: 'Calendar',
//       icon: AiOutlineCalendar,
//       url: 'https://www.google.com',
//     },
//     {
//       name: 'Create Shift',
//       icon: CiViewTable,
//       url: `https://www.linkedin.com`,
//     },
//     {
//       name: 'Settings',
//       icon: FiSettings,
//       url: 'https://www.youtube.com',
//     },
//   ];

//   return (
//     <Box
//       transition="3s ease"
//       bg="#313871"
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{base: 'full', md: 60}}
//       pos="fixed"
//       h="full"
//       paddingTop="2rem"
//       {...rest}
//     >
//       <Flex h="3rem" alignItems="center" mx="8" justifyContent="space-between" marginBottom="2.5rem">
//         <img className="nd-logo" src={ndLogo} alt="NurseDash logo" />
//         <CloseButton display={{base: 'flex', md: 'none'}} onClick={onClose} color="white" />
//       </Flex>
//       {linkItems.map(link => {

//         return <NavItem key={link.name} icon={link.icon} url={link.url}>
//           {link.name}
//         </NavItem>
// })}
//     </Box>
//   );
// };

// export default SidebarContent;
