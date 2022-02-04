import { useState } from 'react'
import { FormControl, FormLabel, Input, Flex, VStack, Textarea, Button } from '@chakra-ui/react';


const ContactForm = () => {
    const [name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            email,
            message,
        };
    };

    return (
        <Flex width='100%' justifyContent='center'>
            <VStack width='500px'>
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
                    placeholder='email@provider.com'
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
                    
                    // isLoading
                    // loadingText='Submitting'
                    colorScheme='teal'
                    variant='outline'
                    width='500px'
                >
                    Submit
                </Button>
            </VStack>
        </Flex>
        // <form onSubmit={handleSubmit}>
        //   <label htmlFor="name">Name:</label>
        //   <input
        //     id="name"
        //     type="text"
        //     onChange={e => setName(e.target.value)}
        //   />
        //   <label htmlFor="email">Email:</label>
        //   <input
        //     id="email"
        //     type="email"
        //     onChange={e => setEmail(e.target.value)}
        //   />
        //   <label htmlFor="message">Message:</label>
        //   <textarea
        //     id="message"
        //     type="text"
        //     rows="4"
        //     onChange={e => setMessage(e.target.value)}
        //   />
        //   <button type="submit">Send</button>
        // </form>
  )
};

export default ContactForm;
