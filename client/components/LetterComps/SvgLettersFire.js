import React from 'react';
import styles from '../../styles/SvgLettersFire.module.css'

const SvgLettersFire = () => {
  return (
    <div>
    <video className={styles.video} autoPlay playsInline muted loop preload><source src='/Fire.mp4' type='video/mp4'/></video>
    <svg className={styles.svg} height='500px' width='888.88px' fontFamily='Montserrat' fontSize='35em' fontWeight='bold' text-transform='uppercase'>
        <defs>
          <mask id='mask' x='0' y='0' height='500px' width='888.88px'>
              <rect className={styles.rect} x='0px' y='0px' height='500px' width='100%'/>
              <text  x='445px' y='450px' fill='black' textAnchor='middle'>CH</text>
          </mask>
        </defs>
        <rect x='0' y='0' height='500px' width='100%'/>
    </svg>
    </div>
  );
};

export default SvgLettersFire;
