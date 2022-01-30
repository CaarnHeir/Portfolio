import React from 'react';
import styles from '../../styles/SvgLetters.module.css'

const SvgLettersWaves = () => {
  return (
      <svg className={styles.svg} height='175%' width='100%' fontFamily='Montserrat' fontSize='35em' fontWeight='bold' text-transform='uppercase'>
          <text x='50%' y='50%' fill='black' textAnchor='middle'>CH</text>
      </svg>
  )
};

export default SvgLettersWaves;
