import Modal from "react-bootstrap/Modal";

export const BingoWindow = ({ open, date, items }) => {
  const handleClose = () => (open = false);

  return (
    <Modal show={open} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Board</Modal.Title>
      </Modal.Header>
      <Modal.Body>Date of Board: {date}</Modal.Body>
      <Modal.Body>Items: {items}</Modal.Body>
    </Modal>
  );
};
