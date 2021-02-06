import { useEffect, useState } from 'react'
import axios from "axios";
import { useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import styles from '../styles/albumCard.module.css'

const AlbumCard = ({album}) => {
  const [user,setUser]=useState(null)
  const {userId, id,title}=album
  const {loading,photos} = useSelector(state => state.photos)
  useEffect(()=>{
    let mounted = true;
    
      axios
      .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if(mounted)
          setUser(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
    return () => mounted = false;
  },[])
  let thumbnailData
  photos.forEach(photoData=>{
    if(photoData.albumId===id)
      thumbnailData=photoData
  })
  return user && !loading? ( 
  <section className={styles.container}>
    <img className={styles.thumbnail} src={thumbnailData.url} alt={thumbnailData.title}/>
    <div className={styles.info}>
      <h1>{title}</h1>
      <ul>
        <li>Name: {user.name}</li>
        <li>Email: {user.email}</li>
        <li>Website: {user.website}</li>
      </ul>
      <Link to={`albums/${id}`}>
        <span className={styles.link}>View Album</span>
      </Link>
    </div>
  </section> ):(
    <h3>loading</h3>
  );
}
 
export default AlbumCard;