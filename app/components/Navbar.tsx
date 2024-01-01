import Link from "next/link";
import styles from "../../styles/Navbar.module.css";


const Navbar = () => {
  const db = {
    webName : "Crux",
  }
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.logo}>
          <Link href="/" passHref>
                {db.webName}
          </Link>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.list}>
          <li className={styles.listItem} >
              <Link href="/"  passHref>Home</Link>
          </li>

          <li className={styles.listItem} >
            <Link href="/apis"  passHref>APIs</Link>
          </li>
          <li className={styles.listItem} >
              <Link href="/admin"  passHref>Admin</Link>
          </li>
          <li className={styles.listItem} >
              <Link href="/more" passHref>Contacts</Link>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Navbar;