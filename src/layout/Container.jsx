import React from 'react'
import styles from './Layout.module.scss'
import { createElement } from 'react'

const Container = props => {
  const {
      outerTag = 'div',
      innerTag = 'div',
      children = <h2>nothing here...</h2>,
      innerClasses: innerClasses0,
      outerClasses,
      h2Text,
      gap = null,
    } = props,
    h2ClassesArr = [ styles.container, styles.h2Style ].join(' '),
    innerClasses = [ styles.container, innerClasses0 ].join(' '),
    gaps = {
      outer: {
        paddingTop: gap || '0',
        paddingBottom: gap || '0',
      },
      h2: {
        marginBottom: gap || '0',
      },
    }

  return (
    createElement(outerTag, { className: outerClasses, style: gap && gaps.outer },
      <>
        {h2Text && <h2 className={h2ClassesArr} style={gaps.h2}>{h2Text}</h2>}
        {createElement(innerTag, { className: innerClasses }, children)}
      </>
    )
  )
}

export default Container
