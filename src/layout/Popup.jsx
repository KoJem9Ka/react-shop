import React from 'react'
import styles from './Layout.module.scss'
import { createElement, useEffect, useRef } from 'react'
import Line from './Line'

const Popup = props => {
  const {
      outerTag = 'div',
      innerTag = 'div',
      children = 'nothing here...',
      outerClasses: outerClasses0,
      innerClasses: innerClasses0,
      contentClasses,
      title = 'Title Undefined',
      closeHandler = () => alert('Popup\'s closeHandler() Undefined'),
    } = props,
    backgroundRef = useRef(),
    outerClasses = [ outerClasses0, styles.PopupOuter ].join(' '),
    innerClasses = [ innerClasses0, styles.container, styles.PopupInner ].join(' '),
    documentClickHandler = e => (e.target === backgroundRef.current || e.keyCode === 27) && closeHandler()

  useEffect(() => {
    document.addEventListener('click', documentClickHandler)
    document.addEventListener('keydown', documentClickHandler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('click', documentClickHandler)
      document.removeEventListener('keydown', documentClickHandler)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    createElement(outerTag, { className: outerClasses, ref: backgroundRef },
      createElement(innerTag, { className: innerClasses },
        <>
          <div>
            <h2>{title}</h2>
            <button onClick={closeHandler}>&times;</button>
          </div>
          <Line/>
          <div className={contentClasses}>
            {children}
          </div>
        </>
      )
    )
  )
}

export default Popup
