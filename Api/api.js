import { get } from 'axios';

const fetchPost = async id => {
  const results = await get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return results.data;
};

export default fetchPost;