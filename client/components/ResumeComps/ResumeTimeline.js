import { Center } from '@chakra-ui/react';

import styles from '../../styles/ResumeTimeline.module.css'

const ResumeTimeline = () => {
  return (
      <Center  marginBottom='100px'>
          <ul className={styles.timeline}>
            <li>
                <div className={styles.directionr}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Current title</span>
                        <span className={styles.timewrapper}><span className={styles.time}>2013 - present</span></span>
                    </div>
                    <div className={styles.desc}>aasdfasdfasdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe!</div>
                </div>
            </li>
            <li>
                <div className={styles.directionl}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Company</span>
                        <span className={styles.timewrapper}><span className={styles.time}>2011 - 2013</span></span>
                    </div>
                    <div className={styles.desc}>gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg.</div>
                </div>
            </li>
            <li>
                <div className={styles.directionr}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>University</span>
                        <span className={styles.timewrapper}><span className={styles.time}>2008 - 2011</span></span>
                    </div>
                    <div className={styles.desc}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
                </div>
            </li>
            <li>
                <div className={styles.directionl}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>Company</span>
                        <span className={styles.timewrapper}><span className={styles.time}>2011 - 2013</span></span>
                    </div>
                    <div className={styles.desc}>ggghdfghdfghdfghdfghdfghggggggggggggggggggsdfgsdfgsdfhsdfhsfdhsdfhsfdhgggggggg.</div>
                </div>
            </li>
            <li>
                <div className={styles.directionr}>
                    <div className={styles.flagwrapper}>
                        <span className={styles.flag}>University</span>
                        <span className={styles.timewrapper}><span className={styles.time}>2008 - 2011</span></span>
                    </div>
                    <div className={styles.desc}>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
                </div>
            </li>
            </ul>
      </Center>
  )
};

export default ResumeTimeline;
