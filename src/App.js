import logo from './logo.svg';
import './App.css';
import { ListFriend, Main, LeftBar } from "./components"

function App() {
  return (
    <div className="flex p min-h-screen	">
      <LeftBar />
      <ListFriend />
      <Main />
    </div>
  );
}

export default App;
