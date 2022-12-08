import { Modal, Button } from "react-bootstrap";
import { warning } from "../warning";

export const BingoWindow = ({
  open,
  id,
  date,
  time,
  day,
  items,
  bingos,
  handleClose,
}) => {
  const itemString = items.split(",");
  const lastItem = itemString.slice(-1);
  const itemList = itemString.slice(0, -1).map((item) => {
    return item + ", ";
  });
  itemList.push(lastItem);

  const onDelete = async () => {
    try {
      const deleteBoard = await fetch(`http://localhost:5000/remove/${id}`, {
        method: "DELETE",
      });

      const deletedItems = itemString.slice(0, -1);
      deletedItems.push(lastItem.toString().slice(0, -1));

      console.log(deletedItems);
      console.log(JSON.stringify(deletedItems));
      const deleteItems = await fetch("http://localhost:5000/decrease", {
        method: "PUT",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(deletedItems),
      });
      handleClose();
      window.location.reload();
    } catch (err) {
      console.error(err.message);
    }
  };

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
        <br />
        <br />
        Day of Sending: {day}
        <br />
        <br />
        Time of Sending: {time.split(".")[0]}
        <br />
        <br />
        Items: {itemList}
        <br />
        <br />
        Number of Bingos: {bingos}
        <br />
        <br />
        <Button
          onClick={() => {
            if (warning("delete")) {
              onDelete();
            }
          }}
        >
          Delete Board
        </Button>
      </Modal.Body>
    </Modal>
  );
};
