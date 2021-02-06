import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import styles from "../styles/albumList.module.css";
import AlbumCard from "../components/albumCard";
// import {fetchAlbums} from '../redux/index'
import { fetchAlbums } from "./../redux/album/albumActions";
import { fetchPhotos } from "./../redux/photo/photoActions";
const AlbumList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbums());
    dispatch(fetchPhotos());
  }, []);
  const { loading, albums } = useSelector((state) => state.albums);
  const [userFilter, setUserFilter] = useState("-1");
  let albumsCards;
  if (albums) {
    if (userFilter !== '-1'){
      const filteredAlbums = albums.filter((album) => album.userId === parseInt(userFilter))
      albumsCards = filteredAlbums.map((album) => <AlbumCard key={uuid()} album={album} />)
    }else{
      albumsCards = albums.map((album) => <AlbumCard key={uuid()} album={album} />)
    }
  }
  return loading ? (
    <h1>loading....</h1>
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
          <option value="1">User1</option>
          <option value="2">User2</option>
          <option value="3">User3</option>
          <option value="4">User4</option>
          <option value="5">User5</option>
          <option value="6">User6</option>
          <option value="7">User7</option>
          <option value="8">User8</option>
          <option value="9">User9</option>
          <option value="10">User10</option>
        </select>
      </div>
      <div className={styles.container}>{albumsCards}</div>
    </>
  );
};

export default AlbumList;
