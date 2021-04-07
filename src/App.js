import "./App.css";
import UserList from "./Components/UserList";

function App() {
    return (
        <div
            className="App"
            style={{
                backgroundColor: "#5F4B8BFF",
                position: "absolute",
                top: "0",
                left: "0",
                right: "0",
                bottom: "0",
            }}
        >
            <UserList />
        </div>
    );
}

export default App;
