const posts = () => {
  return fetch("https://jsonplaceholder.typicode.com/posts");
};
const postById = ({ params }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
};
export { posts, postById };
