
// import {FlexProps, Flex, Icon} from '@chakra-ui/react';
// import { ReactNode } from 'react';
// import {IconType} from 'react-icons';
// import {Link} from 'react-router-dom';

// interface NavItemProps extends FlexProps {
//     icon: IconType;
//     children: ReactNode;
//     url?: string;
// }

// const NavItem = ({icon, url = '', children, ...rest}: NavItemProps) => (
//   <Link color="white" to={url} style={{textDecoration: 'none'}}>
//     <Flex
//       align="center"
//       p="4"
//       mx="4"
//       borderRadius="lg"
//       role="group"
//       cursor="pointer"
//       _hover={{
//         textDecoration: 'underline',
//       }}
//       _active={{
//         backgroundColor: '#475392',
//       }}
//       {...rest}
//     >
//       {icon && (
//         <Icon
//           mr="4"
//           fontSize="16"
//           _groupHover={{
//             color: 'white',
//           }}
//           as={icon}
//         />
//       )}
//       {children}
//     </Flex>
//   </Link>
// );

// export default NavItem;
