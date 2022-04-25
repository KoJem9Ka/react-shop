import React from 'react'
import styles from './Alert.module.scss'
import { useEffect, useRef, useState } from 'react'

const Alert = ({ count, id, name, alertHandlers }) => {
  const [ visibility, setVisibility ] = useState(true),
    alertStyles = [
      styles.Alert,
      (visibility ? styles.active : null)
    ].join(' '),
    timerId = useRef()

  useEffect(() => {
    timerId.current = setTimeout(() => {
      setVisibility(false)
      clearTimeout(timerId.current)
      timerId.current = setTimeout(() => alertHandlers.removeAlert(id), 1000)
    }, 5000)
    return () => {
      setVisibility(true)
      clearTimeout(timerId.current)
    }
  }, [ count ])

  return (
    <div className={alertStyles} onClick={alertHandlers.basketToggleVisibleHandler}>
			&laquo;
      {name}
&raquo; добавлено в корзину.
      <br/>
			Всего
      {' '}
      {count}
      {' '}
шт.
    </div>
  )
}

export default Alert
