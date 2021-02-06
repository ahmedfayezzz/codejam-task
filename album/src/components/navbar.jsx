import styles from '../styles/navbar.module.css'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return ( 
  <nav className={styles.container}>
    <Link to='/'>
      <h1 className={styles.logo}>Photo Album App</h1>
    </Link>
  </nav> );
}
 
export default NavBar