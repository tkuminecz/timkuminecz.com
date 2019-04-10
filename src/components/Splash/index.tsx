import * as React from 'react'
const styles = require('./styles.scss')

const Nav = () => (
  <nav className={styles.nav}>
    <ul>
      <li><a href='https://resume.timkuminecz.com'>Resume</a></li>
      <li><a href='https://projects.timkuminecz.com'>Projects</a></li>
      <li><a href='https://github.com/tkuminecz'>Github</a></li>
    </ul>
  </nav>
)

export default () => (
  <div className={styles.splash}>
    <div>
      <h1>timkuminecz<span className={styles.lighter}>.com</span></h1>
      <Nav/>
    </div>
  </div>
)
