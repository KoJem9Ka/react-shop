import React from 'react'
import Container from './Container'
import styles from './Layout.module.scss'

const Footer = () => (
  <Container
    innerClasses={styles.inner}
    outerTag='footer'
  >
    <a href='https://github.com/KoJem9Ka/react-shop' rel='noreferrer' target='_blank'>KoJem9Ka&apos;s Repo</a>
    <span>
      {new Date().getFullYear()}
      {' '}
      &copy;
    </span>
  </Container>
)

export default Footer
