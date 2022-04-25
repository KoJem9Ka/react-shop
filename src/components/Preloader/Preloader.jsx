import styles from './Preloader.module.css'

const Preloader = props => {

	return (
		<div className={styles.spinner}>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
			<i></i>
		</div>
	)
}

export default Preloader