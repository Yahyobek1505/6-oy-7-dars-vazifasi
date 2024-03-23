import logo from "../../assets/Logo.png";
import styles from "./index.module.css"
function Header() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.imgLogo}>
          <img src={logo} alt="" />
        </div>
        <div className={styles.nav}>
        <ul className={styles.menu}>
          <li>Home</li>
          <li>About us</li>
          <li>How it works</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <button className={styles.btn}>Get Started</button>
        </div>
      </header>
    </>
  );
}

export default Header;
