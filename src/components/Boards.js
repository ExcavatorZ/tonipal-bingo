import moment from "moment/moment";
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
    <Fragment>
      {isOpen && (
        <BingoWindow
          open={isOpen}
          id={bingoInfo.id}
          date={bingoInfo.date[0]}
          time={bingoInfo.date[1]}
          day={bingoInfo.day}
          items={bingoInfo.items}
          bingos={bingoInfo.bingos}
          extra_info={bingoInfo.extra_info}
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
                        id: board.id,
                        date: board.date.split("T"),
                        time: board.date.split("T"),
                        day: moment(board.date).format("dddd"),
                        items: board.items + " ",
                        bingos: board.bingos,
                        extra_info: board.extra_info,
                      });
                      setIsOpen(!isOpen);
                    }}
                  >
                    {board.date.split("T")[0]}
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
          <button
            onClick={() => navigate("/results")}
            style={{ margin: "20px" }}
            className="button"
          >
            Leaderboards
          </button>
        </Fragment>
      )}
    </Fragment>
  );
};
