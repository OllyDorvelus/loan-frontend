import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import RegisterForm from '@/components/forms/RegisterForm'
import BankForm from '@/components/forms/BankForm';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <RegisterForm />
      <BankForm />
    </div>
  )
}

export default Home
