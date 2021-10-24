import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1 className={styles.title}> Welcome to H-E-B! </h1>
            <Link href="/inventory">
                <button type="button" className={styles.btn}> Check Inventory</button>
            </Link>
        </div>
    )
}
