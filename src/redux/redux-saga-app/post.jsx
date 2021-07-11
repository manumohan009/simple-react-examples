import React, { useEffect } from "react";
import { connect } from "react-redux";

function Post({ posts, fetchPosts }) {
  useEffect(() => {
    fetchPosts();
  }, []);
  const postData = posts && posts.postData;
  return (
    <div>
      <ul>
        {postData
          ? postData.map((post) => {
              return <li key={post.id}>{post.title}</li>;
            })
          : null}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch({ type: "FETCH_POSTS" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
