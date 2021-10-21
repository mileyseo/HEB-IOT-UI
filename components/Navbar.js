import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
            <Image src="/H-E-B_logo.svg.png" alt="logo" width={235} height={80}></Image>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/categories"><a>Categories</a></Link>
        </nav>
    )
} 