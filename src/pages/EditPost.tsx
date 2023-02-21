import './styles/EditPost.css';
import { useParams } from 'react-router-dom';
import Missing from './Missing';
import EditPostForm from '../components/EditPostForm';
import { PostInterface } from '../scripts/interfaces';

type EditPostProps = {
  posts: PostInterface[];
  handleEdit: (post: PostInterface, id: number) => any;
};

const EditPost = ({ posts, handleEdit }: EditPostProps) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id?.toString() === id);
  if (!post) return <Missing />;

  return (
    <main className="EditPost" role="main">
      <h1>Edit Post</h1>
      <EditPostForm
        handleCreatePost={(post) => {
          if (id) handleEdit(post, +id);
        }}
        initPost={post}
      />
    </main>
  );
};
export default EditPost;
