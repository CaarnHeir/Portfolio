import React from 'react';
import { Flex } from '@chakra-ui/react'
import styles from '../../styles/SvgLettersFire.module.css'

const SvgLettersFire = () => {
  return (
    <div display='relative'>
        <Flex justifyContent= 'center' height='500px'  width='100%' >
            <video className={styles.video} autoPlay playsInline muted loop preload='true'><source src='/Fire.mp4' type='video/mp4'/></video>
            <svg className={styles.svg} viewBox='0 0 889 500' fontFamily='Montserrat' fontSize='35em' fontWeight='bold' text-transform='uppercase'>
                <defs>
                    <mask id='mask' x='0' y='0' height='100%' width='100%'>
                        <rect className={styles.rect} height='100%' width='100%'/>
                        <text  x='50%' y='85%' fill='black' textAnchor='middle'>CH</text>
                    </mask>
                </defs>
                <rect x='0' y='0' height='100%' width='100%'/>
            </svg>
        </Flex>
      </div>
  );
};

export default SvgLettersFire;
