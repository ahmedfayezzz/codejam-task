import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import styles from "../styles/albumList.module.css";
import AlbumCard from "../components/albumCard";
import { fetchAlbums } from "./../redux/album/albumActions";
import { fetchPhotos } from "./../redux/photo/photoActions";
import { fetchUsers } from "../redux/user/userActions";
const AlbumList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
    dispatch(fetchUsers());
  }, []);
  const [userFilter, setUserFilter] = useState("-1");
  const albumsData  = useSelector((state) => state.albums);
  const usersData  = useSelector((state) => state.users);
  const photosData  = useSelector((state) => state.photos);
  // console.log(photosData);
  let albumsCards;
  let usersOptions
  if( !albumsData.loading && !usersData.loading && !photosData.loading){
    let albums=albumsData.albums
    let users=usersData.users
    let photos=photosData.photos
    if (userFilter !== "-1") {
      albums = albums.filter(
        (album) => album.userId === parseInt(userFilter)
      );
    } 
    albumsCards = albums.map((album) => {
      let thumbnail
      photos.forEach(photoData=>{
        if(photoData.albumId===album.id)
          thumbnail=photoData
      })
      let albumUser
      users.forEach(user=>{
        if(user.id===album.userId)
          albumUser=user
      })
      return <AlbumCard key={uuid()} user={albumUser} thumbnail={thumbnail} album={album} />
    });
    usersOptions=users.map((user,i)=><option key={uuid()} value={(i+1).toString()}>{user.name}</option>)
  }
  
  
  return albumsData.loading || usersData.loading || photosData.loading? (
    <h1 style={{textAlign:'center'}}>loading....</h1>
  ) : (
    <>
      <div className={styles.filter}>
        <h3>Filter Albums</h3>
        <select
          name="users"
          value={userFilter}
          onChange={(e) => setUserFilter(e.target.value)}
        >
          <option value="-1">All users</option>
          {usersOptions}
        </select>
      </div>
      <div className={styles.container}>{albumsCards}</div>
    </>
  );
};

export default AlbumList;
