import Image from 'next/image'
import Frontpage from './components/Frontpage'
import Navbar from './components/Navbar'
import styles from "../styles/Front.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <Navbar/>
      <Frontpage/>
    </main>
  )
}
