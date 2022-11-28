import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const BingoWindow = ({ open, date, items, handleClose }) => {
  const navigate = useNavigate();

  return (
    <Modal
      show={open}
      onHide={handleClose}
      className="modalBackground"
      backdrop="static"
    >
      {console.log(open)}
      <Modal.Title className="modalTitle">
        Board
        <Button
          className="modalClose"
          onClick={() => {
            handleClose();
          }}
        >
          X
        </Button>
      </Modal.Title>
      <Modal.Body className="container">
        Date of Board: {date}
        {<br />}
        Items: {items}
      </Modal.Body>
    </Modal>
  );
};
