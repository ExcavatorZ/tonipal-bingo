import { Outlet } from "react-router-dom"

export const Header = () => {
    return (
        <div className="App">
        <h1>Tonipal Bingo</h1>
        <main>
            <Outlet />
        </main>
        </div>
    );
};