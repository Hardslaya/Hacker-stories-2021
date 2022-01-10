export default function Search() {
  
  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}  />
    </>
  );
}
