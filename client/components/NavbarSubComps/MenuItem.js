import { Link, Text, Button } from "@chakra-ui/react";

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
      <Link href={to}>
        <Button size='md'>
        <Text display="block" fontWeight='bold' {...rest}>
          {children}
        </Text>
        </Button>
      </Link>
    )
  };


export default MenuItem;
  