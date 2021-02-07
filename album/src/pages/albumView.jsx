import axios from "axios";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "./../redux/photo/photoActions";
import styles from "../styles/albumView.module.css";
import { fetchAlbumID } from './../redux/album/albumByIDActions';
const AlbumView = (props) => {
  const id = props.match.params.id;
  const [selected, setSelected] = useState(0);
  const albumData  = useSelector((state) => state.albumID);
  const photosData  = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAlbumID(id))
    dispatch(fetchPhotos());
  }, []);
  let Images
  let albumImages
  const album=albumData.album
  if( !albumData.loading && !photosData.loading){
    let photos=photosData.photos
    albumImages = photos.filter(
      (photo) => photo.albumId.toString() === id
    );
    Images = albumImages.map((image, i) =>
      i === selected ? (
        <img
          className={styles.selected}
          key={uuid()}
          src={image.thumbnailUrl}
          alt={image.title}
        />
      ) : (
        <img key={uuid()} src={image.thumbnailUrl} alt={image.title} />
      )
    );
  }
  return albumData.loading || photosData.loading ?(
    <h1 style={{textAlign:'center'}}>loading....</h1>
  ): (
    <div className={styles.container}>
      <h2 className={styles.title}>{album.title}</h2>
      <div className={styles.previewContainer}>
        <button
          onClick={() => setSelected(selected === 0 ? selected : selected - 1)}
        >
          Previous Photo
        </button>
        <img
          className={styles.imagePreview}
          src={albumImages[selected].url}
          alt={albumImages[selected].title}
        />
        <button
          onClick={() =>
            setSelected(
              selected < albumImages.length - 1 ? selected + 1 : selected
            )
          }
        >
          Next Photo
        </button>
      </div>
      <h2 className={styles.title}>{albumImages[selected].title}</h2>
      <div className={styles.thumbnailsContainer}>{Images}</div>
    </div>
  )
};

export default AlbumView;
