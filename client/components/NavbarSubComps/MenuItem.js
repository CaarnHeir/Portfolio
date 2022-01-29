import { Link, Text } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Text display="block" fontWeight='bold' {...rest}>
          {children}
        </Text>
      </Link>
    )
  };


export default MenuItem;
  