

const AlbumView = (props) => {
  const id=props.match.params.id
  return ( 
    <>
      <h2>album {id} view page</h2>
    </>
   );
}
 
export default AlbumView