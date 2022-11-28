import { useEffect, useState, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { BingoWindow } from "./BingoWindow";

export const Boards = () => {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const getBoards = async () => {
    try {
      const response = await fetch("http://localhost:5000/boards");
      const jsondata = await response.json();
      setBoards(jsondata);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getBoards();
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [bingoInfo, setBingoInfo] = useState({});
  const handleClose = () => setIsOpen(!isOpen);

  return (
    <div>
      {isOpen && (
        <BingoWindow
          open={isOpen}
          date={bingoInfo.date[0]}
          items={bingoInfo.items}
          handleClose={handleClose}
        />
      )}
      {!isOpen && (
        <Fragment>
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Items</th>
                <th>Bingos</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => (
                <tr key={board.date}>
                  <td
                    className="tableitem"
                    id="link"
                    onClick={() => {
                      setBingoInfo({
                        date: board.date.split("T"),
                        items: board.items + " ",
                      });
                      setIsOpen(!isOpen);
                    }}
                  >
                    {board.date}
                  </td>
                  <td className="tableitem">{board.items.length}</td>
                  <td className="tableitem">{board.bingos}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <button
            onClick={() => navigate("/")}
            style={{ margin: "20px" }}
            className="button"
          >
            New bingo board.
          </button>
        </Fragment>
      )}
    </div>
  );
};
