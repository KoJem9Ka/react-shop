import React from 'react'
import styles from './Layout.module.scss'
import Container from './Container'

const Header = () => (
  <Container
    innerClasses={styles.inner}
    outerTag='header'
  >
    <a className={styles.logo} href='/'>BestShop</a>
    <a href='https://github.com/KoJem9Ka/react-shop' rel='noreferrer' target='_blank'>Repo</a>
  </Container>
)

export default Header
