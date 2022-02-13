import { Center, Box, Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <Center mt='50px' mb= '50px'>
      <Box marginRight='20%' marginLeft='20%'>
    <Text fontFamily='Montserrat' fontSize='xl'>
      <p>
      Hello, I’m Caarn! I am a full stack engineer with a passion for technology and business. I have spent nearly a decade in Procurement and Consulting across numerous industries. Through the years, I have spent nights and weekends learning everything I can about programming. 
      </p>
      <br/>
      <p>
      Slowly, I began to incorporate that knowledge into my everyday work-life, by “automating the boring stuff.” Eventually that grew into building out business tools and more critical business needs for the companies I worked for. As the years went on, I felt myself looking for opportunities to program as I truly enjoy the work. This brings me to today:
      </p>
      <br/>
      <p>
      My passion for technology and subsequently my desire to identify areas where programming could improve life and remove waste, has organically led me to seek out full time development roles and turn a passion into a profession!
      </p>
    </Text>
      </Box>
    </Center>
  )
};

export default AboutMe;
