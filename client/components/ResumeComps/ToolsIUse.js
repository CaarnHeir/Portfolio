import { Center, WrapItem, Image, Wrap } from '@chakra-ui/react';
import styles from '../../styles/ToolsIUse.module.css'
import React from 'react';



const ToolsIUse = () => {
  return (
    <Center marginBottom='100px'marginTop='50px' >
        <Wrap alignItems='center'marginLeft='10px' marginRight='10px'>
          <WrapItem>
            <Image className={styles.image} src='/python.png' />
          </WrapItem>
          <WrapItem>
            <Image src='/django.png' className={styles.image} marginRight='10px'/>
          </WrapItem>
          <WrapItem>
            <Image src='/fastapi1.png' className={styles.image}/>            
          </WrapItem>
          <WrapItem>
            <Image src='/mongodb1.png'className={styles.image}/>           
          </WrapItem>
          <WrapItem>
            <Image src='/nextjs.png' className={styles.imagehoriz}/>          
          </WrapItem>
          <WrapItem>
            <Image src='/react1.png' className={styles.image} />         
          </WrapItem>
          <WrapItem>
            <Image src='/redux.png' className={styles.image} />      
          </WrapItem>
          <WrapItem>
            <Image src='/postgresql.png' className={styles.image} />
          </WrapItem>
          <WrapItem>
            <Image src='/javascript.png' className={styles.image}/>
          </WrapItem>
          <WrapItem>
            <Image src='/html.png' className={styles.image} />
          </WrapItem>
          <WrapItem>
            <Image src='/css.png' className={styles.image} />
          </WrapItem>
        </Wrap>
    </Center>
  )
};

export default ToolsIUse;
