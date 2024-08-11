import { useState } from "react";
function Search(props) {
  const [search, setSearch] = useState("");
  const onSearchChange = () => {
    props.onSearchChange(search);
  };
  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchChange();
    }
  };
  return (
    <>
      <div>
        Search Article :{" "}
        <input
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={searchKeyDown}
        ></input>
        <button onClick={onSearchChange}>Search</button>
      </div>
      <small>
        ditemukan {props.totalPosts} data dengan kata kunci : {search}
      </small>
    </>
  );
}
export default Search;
