import React from 'react'
import styles from './Layout.module.scss'

const Line = props => (
  <hr className={[ styles.Line, props.className ].join(' ')}/>
)

export default Line
