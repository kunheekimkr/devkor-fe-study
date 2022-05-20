function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title[props.number]}</h4>
      <p>{props.date}</p>
      <p>{props.context}</p>
      <button
        onClick={() => {
          props.onClick(props.number)
        }}
      >
        글 수정
      </button>
    </div>
  );
}

export default Modal;
