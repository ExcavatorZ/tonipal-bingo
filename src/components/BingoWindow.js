import Modal from "react-bootstrap/Modal";

export const BingoWindow = ({ open, date, items }) => {
  const handleClose = () => (open = false);

  return (
    <Modal show={open} onHide={handleClose} className="modalBackground">
      <Modal.Header closeButton>
        <Modal.Title>Board</Modal.Title>
      </Modal.Header>
      <Modal.Body className="container">
        Date of Board: {date}
        {<br />}
        Items: {items}
      </Modal.Body>
    </Modal>
  );
};
