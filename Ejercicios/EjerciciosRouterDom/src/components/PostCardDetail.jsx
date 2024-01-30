import { useParams } from "react-router-dom";
import useDataApi from "../hooks/useDataApi";

const PostCardDetail = () => {
  const parametros = useParams();
  const URL = 'https://jsonplaceholder.typicode.com/posts/'+parametros.postId;

  const { data, error, loading } = useDataApi(URL);

  // const { title, userId, body, id } = data; Preguntar por null


  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">UserID: {data.userId}</p>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.body}</p>
    </div>

  )
}

export default PostCardDetail