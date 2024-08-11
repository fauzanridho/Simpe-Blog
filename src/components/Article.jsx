import { useContext } from "react";
import { GlobalContext } from "../context/index.js"; 

const NewArticle = ({ isNew }) => {
  return isNew && <span>-- New!!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);
  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date : {props.date}, tags : {props.tags.join(",")}
        <NewArticle isNew={props.isNew} />
      </small>
      <div>
        <small>ditulis oleh {user.name}</small>
      </div>
    </>
  );
}
export default Article;
