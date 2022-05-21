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

  const onClick = (i) => {
    let copy = [...posts];
    copy[i] = "여자코트 추천";
    copy.sort();
    setPosts(copy);
  };

  let [inputData, changeData] = useState("");

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
                onClick(i);
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
            <button
              onClick={() => {
                let copy = [...posts];
                copy.splice(i, 1);
                setPosts(copy);
              }}
            >
              글 삭제
            </button>
            {modal[i] == true ? (
              <Modal
                title={posts}
                date="2월 17일 발행"
                context="something"
                number={i}
                onClick={onClick}
              ></Modal>
            ) : null}
            <hr />
          </div>
        );
      })}
      <form>
        <input
          onChange={(e) => {
            changeData(e.target.value);
          }}
          placeholder="제목을 입력하세요"
        ></input>
        <button
          onClick={() => {
            let postscopy = [...posts];
            postscopy.push(inputData);
            setPosts(postscopy);
            let modalcopy = [...modal];
            modalcopy.push(false);
            setModal(modalcopy);
          }}
          type='reset'
        >
          글 추가
        </button>
      </form>
    </div>
  );
}

export default App;
