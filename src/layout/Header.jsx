import React from 'react'
import styles from './Layout.module.scss'
import Container from './Container'

const Header = () => {
  return (
    <Container
      innerClasses={styles.inner}
      outerTag='header'
    >
      <span className={styles.logo}>BestShop</span>
      <span>someText</span>
    </Container>
  )
}

export default Header
