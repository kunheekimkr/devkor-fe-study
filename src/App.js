import "./App.css";
import React, { useState } from "react";

function App() {
  let [posts, setPosts] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  posts.sort();
  
  return (
    <div className="App">
      <div className="navbar">ReactBlog</div>
      {posts.map(function (post, i) {
        return (
          <div className="list" key={i}>
            <h3>{post}</h3>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...posts];
                copy[i] = "여자코트 추천";
                copy.sort();
                setPosts(copy);
              }}
            >
              글 수정
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
