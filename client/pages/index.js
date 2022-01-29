import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'

import Letters from '../components/LetterComps/Letters'

export default function Home({toggleDark}) {
  return (
    <div>
     <Letters toggleDark={toggleDark} />
    </div>
  )
}
