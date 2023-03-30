import Post from './Post';
import { useEffect, useState } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((res) => res.json())
  //     .then((json) => setPosts(json))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const res = await fetch(API_URL);
    //     const json = await res.json();
    //     setPosts(json);
    //   } catch (error) {
    //     setError(error.message);
    //   }
    //   setIsLoading(false);
    // }
    // fetchData();
    (async function () {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setPosts(json);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })(); // IIFE - Immediately Invoked Function Expression
  }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts && posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  );
}

export default Posts;
