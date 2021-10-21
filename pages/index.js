import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inventory Hub</h1>
      <p1 className={styles.text}>Select State: </p1>
      <p1 className={styles.text}>Select City: </p1>
      <p1 className={styles.text}>Select Location: </p1>
      <Link href="/categories"><a>See Categories</a></Link>
    </div>
  )
}
