import { useEffect } from 'react'
import { useSelector } from 'react-redux'
// import {fetchAlbums} from '../redux/index'
import { fetchAlbums } from './../redux/album/albumActions';
const AlbumList = () => {
  useEffect(()=>{
    fetchAlbums()
  },[])
  const albums = useSelector(state => state.albums)
  console.log(albums)
  return ( 
  <>
    <h2>album list page</h2>
  </> );
}
 
export default AlbumList;