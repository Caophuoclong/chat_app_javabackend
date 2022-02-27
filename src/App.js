import logo from './logo.svg';
import './App.css';
import { ListFriend, Main } from "./components"
function App() {
  return (
    <div className="flex p-2">
      <ListFriend />
      <Main />
    </div>
  );
}

export default App;
