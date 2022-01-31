import React from 'react';
import styles from '../../styles/SvgLettersWaves.module.css'
import { Flex } from '@chakra-ui/react'

const SvgLettersWaves = () => {
  return (
      <Flex>
        <video className={styles.video} autoPlay playsInline muted loop><source src='/Waves.mp4' type='video/mp4'/></video>
        <Flex justifyContent= 'center'>
            <svg className={styles.svg} height='85%' width='100%' fontFamily='Montserrat' fontSize='35em' fontWeight='bold' text-transform='uppercase'>
                <defs>
                    <mask id='mask' x='0' y='0' height='100%' width='100%'>
                        <rect className={styles.rect} x='0px' y='0px' height='80%' width='100%'/>
                        <text  x='50%' y='70%' fill='black' textAnchor='middle'>CH</text>
                    </mask>
                </defs>
                <rect x='0' y='0' height='80%' width='100%'/>
            </svg>
        </Flex>
      </Flex>
  )
};

export default SvgLettersWaves;