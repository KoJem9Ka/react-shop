import styles from './Alert.module.scss'
import {useEffect, useRef, useState} from 'react'

const Alert = ({count, id, name, alertHandlers}) => {
	const [visibility, setVisibility] = useState(true),
		alertStyles = [
			styles.Alert,
			(visibility ? styles.active : null),
		].join(' '),
		timerId = useRef()

	useEffect(() => {
		timerId.current = setTimeout(() => {
			console.warn('hide: ', name)
			setVisibility(false)
			clearTimeout(timerId.current)
			timerId.current = setTimeout(() => alertHandlers.removeAlert(id), 1000)
		}, 5000)
		console.log('1 ', name, ' timer: ', timerId.current)
		return () => {
			setVisibility(true)
			clearTimeout(timerId.current)
			console.log('0 ', name, ' Killed timer: ', timerId.current)
		}
	}, [count])

	return (
		<div className={alertStyles} onClick={alertHandlers.basketToggleVisibleHandler}>
			&laquo;{name}&raquo; добавлено в корзину.
			<br/>
			Всего {count} шт.
		</div>
	)
}

export default Alert