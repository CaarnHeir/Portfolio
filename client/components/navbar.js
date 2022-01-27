import { Container } from "@chakra-ui/react";
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
        <div>
            <h1>PORTFOLIO TITLE</h1>
            <h1>LOGO</h1>
        </div>
        <Container>
            <Link href='/'><a>Resume</a></Link>
            <Link href='/'><a>Blog</a></Link>
        </Container>
    </>
  )
};

export default Navbar;
