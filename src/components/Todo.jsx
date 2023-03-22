import { useDispatch, useSelector } from "react-redux";
import TodoForms from "./TodoForms";

function Todo() {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state);

  const handleDelete = (index) => {
    dispatch({
      type: "delete",
      payload: index,
    });
  };

  const markText = (index) => {
    dispatch({
      type: "click",
      payload: index,
    });
  };

  return (
    <div>
      <TodoForms />
      <ul className='list-group'>
        {todo.map((item, index) => {
          return (
            <li
              className='list-group-item d-flex aligin-item-center justify-content-between'
              key={index}
            >
              <div
                onClick={() => markText(index)}
                className={
                  item.done === true ? "item-text strike" : "item-text"
                }
              >
                {item.text}
              </div>
              <button
                className='btn btn-outline-danger'
                onClick={() => handleDelete(index)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo;
