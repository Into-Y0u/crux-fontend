import styles from '../../styles/Home.module.css';
import Link from 'next/link';
// import { Gmail, Linkedin,Twitter } from "@icons-pack/react-simple-icons";

const Frontpage = () => {

  const db = {
    intro : {
      hi : "Cruxx",
      introduction : "Backend As a Service",
      para1 : "    Currently working as a Member of Technical staff (Backend Developer) at Zoho Corporation Pvt. Ltd. I have completed my B.Tech on 2022.",

      connect : "Lets Connect.!🤝"
  }
  }

  return (
    <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            {db.intro.hi}
          </h2>
          <h3>{db.intro.introduction}</h3>
          <p>{db.intro.para1}
.         </p>
          <p>{db.intro.connect}</p> 
          <ul className={styles.list}>
            <li>
              <Link href="https://www.linkedin.com/in/arghyadev-sarkar/" passHref>
                LINK
              </Link>
            </li>
            <li>
              <Link href="https://twitter.com/WhosArghya" passHref>
                LINK
              </Link>
            </li>
            <li>
              <Link href="mailto:7arghyadev@gmail.com" passHref>
              LINK
              </Link>
            </li>
          </ul>
          <a href= "content/Arghyadev_Sarkar_Resume.pdf" download>
              <button>
                    Resume
              </button>  
          </a>

        </div>
        <div className={styles.right}>
          {/* <img className={styles.img} src="" alt=""  /> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, nihil? Fugiat ea magnam odit impedit molestiae quidem doloremque non error molestias tempore veniam vel ipsa adipisci accusantium odio enim autem, dolor, quam nihil! Numquam, natus. Sapiente tenetur error excepturi, architecto atque, molestiae suscipit, veniam voluptate laborum odit accusantium quaerat. A, dolore delectus recusandae totam fugit facilis minus deserunt earum est temporibus. Repellendus deserunt velit distinctio inventore adipisci! Quos quo sequi facere velit nostrum perspiciatis recusandae. Facilis accusamus consequuntur sapiente rem voluptatum dolores officiis quam laborum facere ducimus fuga ipsam dolorem repellendus inventore optio quia aut, corporis blanditiis magni esse vitae!
        </div> 
    </div>
  )
}

export default Frontpage