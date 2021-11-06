import styles from '../styles/Splash.module.css'

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li><a href="https://resume.timkuminecz.com/">Resume</a></li>
      <li><a href="https://github.com/tkuminecz">Github</a></li>
    </ul>
  </nav>
);

const Splash = () => (
  <div className={styles.splash}>
    <div>
      <h1>timkuminecz<span className={styles.lighter}>.com</span></h1>
      <Nav/>
    </div>
  </div>
);

export default Splash;
