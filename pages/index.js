import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Inventory Hub</h2>
      <hr></hr>
      <div className="dropdown m-3 dropend">
        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" id="dropdownMenuButton1" aria-expanded="false">
          Select Category {" "}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a className="dropdown-item" href="#"> Item 1</a></li>
          <li><a className="dropdown-item" href="#"> Item 2</a></li>
          <li><a className="dropdown-item" href="#"> Item 3</a></li>
        </ul>
      </div>
    </div>
  )
}
