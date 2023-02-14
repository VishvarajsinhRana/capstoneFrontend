import React, { useState } from 'react';
import '../App.css';
import './BodySection.css';
import SearchBar from './SearchBar';

const posts = [];

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }

  return posts.filter((post) => {
      const postName = post.city.toLowerCase();
      return postName.includes(query.toLowerCase());
  });
};

function BodySection() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <>
      <div className="body-container">
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      {filteredPosts.map((post) => (
        <div className="box" key={post.id}>
          <p>{post.city}</p>
        </div>
      ))}
      </div>
    </>
  );
}

export default BodySection;