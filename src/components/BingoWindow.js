import { Modal, Button } from "react-bootstrap";

export const BingoWindow = ({ open, date, items, bingos, handleClose }) => {
  const itemString = items.split(",");
  const lastItem = itemString.slice(-1);
  const itemList = itemString.slice(0, -1).map((item) => {
    return item + ", ";
  });
  itemList.push(lastItem);

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
        <Button>Delete Board</Button>
      </Modal.Body>
    </Modal>
  );
};
