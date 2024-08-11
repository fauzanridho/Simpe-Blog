import { useLoaderData } from "react-router-dom";

export default function SinglePost() {
  const post = useLoaderData();
  return (
    <>
      <h2>{post?.title}</h2>
      <div>{post?.body}</div>
    </>
  );
}
