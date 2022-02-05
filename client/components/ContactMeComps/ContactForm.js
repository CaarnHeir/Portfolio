import { useState } from 'react'
import { FormControl, FormLabel, Input, Flex, VStack, Textarea, Button } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';


const ContactForm = () => {
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast()

    const clear = () => {
        setName('');
        setEmail('');
        setMessage('');
      };


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
        fetch('/api/contact', {
            method: 'post',
            body: JSON.stringify(data),
          });
          clear();
    };

    return (
        <Flex width='100%' justifyContent='center'>
            <VStack width='500px'>
                <form onSubmit={handleSubmit}>
            <FormControl >
                <FormLabel htmlFor='name'>Full Name</FormLabel>
                <Input
                    mb='10px'
                    id='name'
                    type='name'
                    value={name}
                    variant='filled'
                    placeholder='Full Name'
                    onChange={e => setName(e.target.value)}
                    isRequired 
                />
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input
                    mb='10px'
                    id='email'
                    type='email'
                    value={email}
                    variant='filled'
                    placeholder='Email@provider.com'
                    onChange={e => setEmail(e.target.value)}
                    isRequired 
                />
                <FormLabel htmlFor='message'>Message</FormLabel>
                <Textarea
                    mb='10px'
                    id='message'
                    type='message'
                    value={message}
                    size='lg'
                    variant='filled'
                    placeholder='Your Message:'
                    onChange={e => setMessage(e.target.value)}
                />
            </FormControl>
                <Button
                    type='submit'
                    // isLoading
                    // loadingText='Submitting'
                    colorScheme='teal'
                    variant='outline'
                    width='500px'
                    onClick={()=>toast({
                        title: 'Outreach processed.',
                        description: "I look forward to speaking with you soon!",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                      })}
                >
                    Submit
                </Button>
                </form>
            </VStack>
        </Flex>
  )
};

export default ContactForm;
