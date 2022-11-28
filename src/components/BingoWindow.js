import { Modal, Button } from "react-bootstrap";

export const BingoWindow = ({ open, date, items, bingos, handleClose }) => {
  const itemString = items.split(",");
  const itemList = itemString.map((item) => {
    return item + ", ";
  });
  /*console.log(itemList[-1]);*/

  return (
    <Modal show={open} onHide={handleClose} backdrop="static">
      <Modal.Header>
        <Button
          style={{ backgroundColor: "red", border: "1px darkred solid" }}
          onClick={() => {
            handleClose();
          }}
        >
          X
        </Button>
      </Modal.Header>
      <Modal.Title className="detailTitle">Details of Board</Modal.Title>
      <Modal.Body>
        Date of Board: {date}
        {<br />}
        {<br />}
        Items: {itemList}
        {<br />}
        {<br />}
        Number of Bingos: {bingos}
      </Modal.Body>
    </Modal>
  );
};
