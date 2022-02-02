import styles from '../styles/Home.module.css'
import Letters from '../components/LetterComps/Letters'
import Blurb from '../components/BlurbComps/Blurb'
import { VStack } from '@chakra-ui/react'

export default function Home({toggleDark}) {
  return (
    <div>
      <Letters toggleDark={toggleDark} />
      <VStack>
        <Blurb/>
      </VStack>
    </div>
  )
}
