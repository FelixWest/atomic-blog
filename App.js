import { useContext, useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { PostProvider, usePosts } from "./PostContext";

// Function to create a random post with a title and body using faker.js
function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

function App() {
  // State to manage the fake dark mode toggle
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Effect that adds/removes the 'fake-dark-mode' class from the HTML element when `isFakeDark` changes
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <section>
      {/* Button to toggle fake dark mode, changing the icon depending on the state */}
      <button
        onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
        className="btn-fake-dark-mode"
      >
        {isFakeDark ? "☀️" : "🌙"}
      </button>

      {/* Providing context to child components */}
      <PostProvider>
        <Header />
        <Main />
        <Archive />
        <Footer />
      </PostProvider>
    </section>
  );
}

function Header() {
  // Consuming the context value using `usePosts` to clear posts
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        {/* Button to clear all posts */}
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}

function SearchPosts() {
  // Using context to handle the search query state
  const { searchQuery, setSearchQuery } = usePosts();

  return (
    // Input field for searching posts by title or content
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}

function Results() {
  // Displaying the number of posts found
  const { posts } = usePosts();

  return <p>🚀 {posts.length} atomic posts found</p>;
}

function Main() {
  return (
    <main>
      {/* Form to add a new post and list of existing posts */}
      <FormAddPost />
      <Posts />
    </main>
  );
}

function Posts() {
  return (
    <section>
      {/* Listing all posts */}
      <List />
    </section>
  );
}

function FormAddPost() {
  // Using state and context to handle post creation
  const { onAddPost } = usePosts();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Handles form submission and adds a new post
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for post title and body */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}

function List() {
  // Rendering a list of posts from context
  const { posts } = usePosts();
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}

function Archive() {
  const { onAddPost } = usePosts();
  // Creating a large list of random posts for the archive, using state to optimize performance by calling the creation function only once
  const [posts] = useState(() =>
    // Generates 10,000 random posts (can be slow, reduce the number if needed)
    Array.from({ length: 10000 }, () => createRandomPost())
  );

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      {/* Button to toggle showing or hiding the archived posts */}
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {/* Conditionally rendering the archived posts */}
      {showArchive && (
        <ul>
          {posts.map((post, i) => (
            <li key={i}>
              <p>
                <strong>{post.title}:</strong> {post.body}
              </p>
              {/* Button to add an archived post as a new post */}
              <button onClick={() => onAddPost(post)}>Add as new post</button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

function Footer() {
  // Static footer for the page
  return <footer>&copy; by Felix Westphal</footer>;
}

export default App;
