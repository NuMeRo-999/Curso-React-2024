import useDataApi from "../hooks/useDataApi";
import PostCard from "./PostCard";

const URL = 'https://jsonplaceholder.typicode.com/posts';

const PostHome = () => {

  const { data, error, loading } = useDataApi(URL);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-10 w-5/6 mx-auto">
        { loading && <p>Cargando...</p> }
        { error && <p>Error</p> }
        { data?.map(post => ( <PostCard key={post.id} post={post}></PostCard> )) }
      </div>
    </>
  )
}

export default PostHome