import "./App.css";
import React, { useState } from "react";
import Modal from "./Modal";

function App() {
  let [posts, setPosts] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);
  posts.sort();
  let [modal, setModal] = useState([false, false, false]);

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
            <button
              onClick={() => {
                let copy = [...modal];
                copy[i] = !modal[i];
                setModal(copy);
              }}
            >
              {posts[i]}
            </button>
            {modal[i] == true ? (
              <Modal
                title={posts[i]}
                date="2월 17일 발행"
                context="something"
              ></Modal>
            ) : null}
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
