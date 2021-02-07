import {Link} from 'react-router-dom'
import styles from '../styles/albumCard.module.css'

const AlbumCard = ({user,thumbnail,album}) => {
  return (
  <section className={styles.container}>
    <img className={styles.thumbnail} src={thumbnail.url} alt={thumbnail.title}/>
    <div className={styles.info}>
      <h1>{album.title}</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Website: {user.website}</li>
      </ul>
      <Link to={`albums/${album.id}`}>
        <span className={styles.link}>View Album</span>
      </Link>
    </div>
  </section> )
}
 
export default AlbumCard;