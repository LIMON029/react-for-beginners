import { useState, useEffect } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChangeToDo = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  }

  useEffect(() => {
    if(toDos.length !== 0) {
      console.log(toDos);
    }
  }, [toDos]);

  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} type="text" placeholder='Write your to do...' onChange={onChangeToDo}/>
        <button>ADD</button>
      </form>
      <hr />
      {toDos.map((item, index) =>
        <li key={index}>{item}</li>
      )}
    </div>
  );
}

export default App;
