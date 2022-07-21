import Button from './Button';
import styles from './Test.module.css';
import { useState, useEffect } from 'react';

function Test() {
  function Hello() {
    function createFun() {
      console.log("Created :)");
      return destroyFun;
    }

    function destroyFun() {
      // cleanup
      console.log("Destroyed :(");
    }

    useEffect(createFun, []);
    return <h1>Hello</h1>;
  }

  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);

  const [showing, setShowing] = useState(false);
  const clickShowing = () => setShowing((prev) => !prev);

  // 한번만 실행하고 싶을 때
  useEffect(() => console.log("Count up"), [counter]);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("Search For ", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <div>
        <input type="text" placeholder='Search here...' onChange={onChange} value={keyword} />
        <h1 className={styles.title}>Total Clicks: {counter}</h1>
        <Button text={"Count Up"} onClick={onClick}/>
      </div>
      <div>
        <button onClick={clickShowing}>{showing ? "HIDE" : "SHOW"}</button>
        {showing ? <Hello /> : null}
      </div>
    </div>
  );
}

export default Test;
