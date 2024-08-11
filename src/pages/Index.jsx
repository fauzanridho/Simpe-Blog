import postsData from "../posts.json";
import Article from "../components/Article";
import { useState, useEffect } from "react";
import Search from "../components/Search";

function Homepage() {
  const [totalPosts, setTotalPosts] = useState(0);
  const [posts, setPosts] = useState(postsData);

  const onSearchChange = (value) => {
    const filteredPosts = postsData.filter((item) =>
      item.title.includes(value)
    );
    setPosts(filteredPosts);
    setTotalPosts(filteredPosts.length);
  };

  return (
    <div>
      <h1>Simple Blog</h1>
      <Search onSearchChange={onSearchChange} totalPosts={totalPosts} />
      {posts.map((props, index) => (
        <Article {...props} key={index} />
      ))}
    </div>
  );
}
export default Homepage;
