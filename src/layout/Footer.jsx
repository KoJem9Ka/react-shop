import React from 'react'
import Container from './Container'
import styles from './Layout.module.scss'

const Footer = () => (
  <Container
    innerClasses={styles.inner}
    outerTag='footer'
  >
    <span>KoJem9Ka</span>
    <span>
      {new Date().getFullYear()}
      {' '}
      &copy;
    </span>
  </Container>
)

export default Footer
