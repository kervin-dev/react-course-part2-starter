import { useState } from "react";
import usePosts from "./hooks/usePosts";
import React from "react";

const PostList = () => {
  const pageSize = 10;
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <ul className="list-group">
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page?.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <button
        disabled={isFetchingNextPage}
        className="btn btn-primary my-1"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load more"}
      </button>
    </>
  );
};

export default PostList;
