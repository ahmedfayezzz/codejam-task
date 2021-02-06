import axios from "axios";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "./../redux/photo/photoActions";
import styles from "../styles/albumView.module.css";
const AlbumView = (props) => {
  const id = props.match.params.id;
  const [album, setAlbum] = useState(null);
  const [selected, setSelected] = useState(0);
  const { loading, photos } = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      axios
        .get(`https://jsonplaceholder.typicode.com/albums/${id}`)
        .then((response) => {
          setAlbum(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
      if (photos.length === 0) dispatch(fetchPhotos());
    }
    return () => (mounted = false);
  }, []);

  const thisAlbumImages = photos.filter(
    (photo) => photo.albumId.toString() === id
  );
  const Images = thisAlbumImages.map((image, i) =>
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

  return album && !loading ? (
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
          src={thisAlbumImages[selected].url}
          alt={thisAlbumImages[selected].title}
        />
        <button
          onClick={() =>
            setSelected(
              selected < thisAlbumImages.length - 1 ? selected + 1 : selected
            )
          }
        >
          Next Photo
        </button>
      </div>
      <h2 className={styles.title}>{thisAlbumImages[selected].title}</h2>
      <div className={styles.thumbnailsContainer}>{Images}</div>
    </div>
  ) : (
    <h1>loading....</h1>
  );
};

export default AlbumView;
