import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoForms() {
  const [taska, setTaska] = useState("");
  const todoforms = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTaska(e.target.value);
  };

  const handlebtn = () => {
    dispatch(
      {
        type: "add",
        payload: taska,
      },
      ...todoforms
    );
    setTaska("");
  };
  console.log(taska);
  return (
    <div className='d-flex justify-content-center'>
      <input
        type='text'
        value={taska}
        onChange={handleChange}
        placeholder='Введите текст'
      />
      <button className='border border-dark' onClick={() => handlebtn()}>
        add
      </button>
    </div>
  );
}

export default TodoForms;
