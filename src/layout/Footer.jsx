import Container from './Container';
import styles from './Layout.module.scss'

const Footer = props => {

	return (
		<Container
			outerTag='footer'
			innerClasses={styles.inner}
		>
			<span>KoJem9Ka</span>
			<span>{new Date().getFullYear()} &copy;</span>
		</Container>
	)
}

export default Footer