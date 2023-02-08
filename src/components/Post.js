import './styles/Post.css';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
  const postDate = new Date(post.publishTime);

  return (
    <article className="Post" id={`post${post.id}`}>
      <Link
        to={`/post/${post.id} `}
        className="postTitle"
      >
        <h2>{post.title}</h2>
      </Link>
      <div className="postInfo">
        <Link to={`/?s=${post.author}`}>
          {post.author}
        </Link>
        <Link to={`/?s=${postDate.toDateString()}`}>
          {postDate.toDateString()}
        </Link>
      </div>
      <p className="postContent">{
        post.content <= 128
          ? post.content
          : `${post.content.slice(0, 128)}...`
      }</p>
    </article>
  );
}
Post.defaultProps = {
  post: {id: NaN, title:'', content:'', author:'', publishTime:''},
}
export default Post;