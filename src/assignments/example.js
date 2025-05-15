import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState(() => {
    const savedToDos = localStorage.getItem("toDos");
    return savedToDos ? JSON.parse(savedToDos) : [];
  });

  // 앱 시작 시 localStorage에서 불러오기
  useEffect(() => {
    const savedToDos = localStorage.getItem("toDos");
    if (savedToDos) {
      setToDos(JSON.parse(savedToDos));
    }
  }, []);

  // toDos가 바뀔 때마다 localStorage에 저장하기
  useEffect(() => {
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }, [toDos]);

  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 새로고침 방지
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);

    setToDo("");
  };
  const deleteToDo = (indexToDelete) => {
    setToDos((currentArray) =>
      currentArray.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="container">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit} className="form">
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul className="list">
        {toDos.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button className="delete" onClick={() => deleteToDo(index)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
