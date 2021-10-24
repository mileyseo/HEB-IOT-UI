import styles from '../styles/Home.module.css'
import { InferGetStaticPropsType } from 'next'
import Item from '../pages/index.js'
import Link from 'next/link'


export const getStaticProps = async () => {
    const res = await fetch('https://.../posts')
    const posts: Item[] = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default function CannedDriedFood({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <h1 className={styles.title}> Canned {"&"} Dried Food </h1>
    </div>
  )
}
