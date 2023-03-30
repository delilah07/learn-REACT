import Post from './Post';
import { useEffect, useState } from 'react';

function Posts() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  //   if (isLoading) {
  //     return <h1>Loading...</h1>;
  //   }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {/* {isLoading && <h1>Loading...</h1>}
      {posts && posts.map((post) => <Post key={post.id} {...post} />)} */}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts && posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
