import Modal from "react-bootstrap/Modal";

export const BingoWindow = (show, date, items) => {
  return (
    <Modal show={show}>
      <h1>{date}</h1>
      <p>{items}</p>
    </Modal>
  );
};
