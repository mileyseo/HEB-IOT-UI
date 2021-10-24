import styles from '../styles/Home.module.css';
import {InferGetStaticPropsType} from "next";

type Item = {
    name: string
    id: number
    aisle: number
    qty: number
}

export const getStaticProps = async () => {
    const res = await fetch('https://github.com/mileyseo/HEB-IOT-UI/blob/master/db.json')
    const posts: Item[] = await res.json()

    return {
        props: {
            posts,
        },
    }
}

function CannedDriedFood({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <h1 className={styles.title}> Canned {"&"} Dried Food </h1>
            <ul>
                {posts.map((post) => (
                    <li>{post.id}</li>
                ))}
            </ul>
        </div>
    )
}
