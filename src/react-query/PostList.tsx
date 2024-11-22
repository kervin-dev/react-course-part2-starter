import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const [page, setPage] = useState<number>(1);
  const pageSize = 10;
  const { data, error, isLoading } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <ul className="list-group">
        {data?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <div className="my-2">
        <button
          className="btn btn-primary"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </button>
        <button
          className="btn btn-primary ms-1"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
