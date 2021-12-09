import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <Link href="/"><Image src="/H-E-B_logo.svg.png" alt="logo" width={175} height={60}></Image></Link>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/contact"><a>Contact Us</a></Link>
        </nav>
    )
} 