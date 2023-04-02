import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const COHORT_NAME = "2104-UIC-RM-WEB-PT";

const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

const postEndPoint = BASE_URL + `/posts`;

//const authToken = window.localStorage.getItem("token");

// //, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${authToken}`,
//     },

//console.log(authToken);

const fetchPost = async () => {
  try {
    const response = await fetch(postEndPoint);

    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
//  fetchPost();

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const allPosts = async () => {
      const postsReceived = await fetchPost();
      const postsArray = postsReceived.data.posts;
      console.log(postsArray);
      postsArray.map((post, index) => {
        if (post) {
          const firstPost = post[0];
          console.log(firstPost);
          return firstPost;
        }
      });
      setPosts(postsArray);
    };
    allPosts();
  }, []);
  const firstPostDescription = posts[0];
  console.log(firstPostDescription);

  //  singlePost();

  // const singlePost = () => {
  //   console.log(firstPostDescription);
  //   const map1 = firstPostDescription.map((x) => console.log(x));
  //   console.log(map1);
  // };

  return (
    <>
      <div>Where are the post?</div>
    </>
  );
};

export default Posts;
