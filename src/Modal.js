function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.context}</p>
    </div>
  );
}

export default Modal;
