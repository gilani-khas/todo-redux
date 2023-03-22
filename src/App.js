import { useSelector } from "react-redux";
import Todo from "./components/Todo";

function App() {
  const todos = useSelector((state) => state);

  return (
    <div className='container'>
      <header className='d-flex aligin-items-center justify-content-center'>
        <h1>Количество задач №{todos.length}</h1>
      </header>
      <Todo />
    </div>
  );
}

export default App;
