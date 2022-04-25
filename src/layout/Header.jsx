import styles from './Layout.module.scss';
import Container from './Container';

const Header = () => {
	console.log(styles)
	return (
		<Container
			outerTag='header'
			innerClasses={styles.inner}
		>
			<span className={styles.logo}>BestShop</span>
			<span>someText</span>
		</Container>
	)
}

export default Header