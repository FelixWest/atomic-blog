import { createContext, useContext, useState } from "react";
import { faker } from "@faker-js/faker";

// Generates a random post using faker.js
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

// 1) Create the context
const PostContext = createContext();

function PostProvider({ children }) {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Filters posts based on the search query
  const searchedPosts = searchQuery
    ? posts.filter((post) =>
        `${post.title} ${post.body}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : posts;

  // Adds a new post
  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  // Clears all posts
  function handleClearPosts() {
    setPosts([]);
  }

  return (
    // 2) Provide state and handlers to children
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

// Custom hook to use the PostContext
function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("usePosts must be used within a PostProvider");
  return context;
}

export { PostProvider, usePosts };
