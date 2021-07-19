import { useState } from "react";

import Header from "./Header/Header.js";
import Queue from "./Queue/Queue.js";
import Todo from "./Todo/Todo.js";

const App = () => {
  const [queue, setQueue] = useState(true);
  
  const handelValue = (e) => {
    setQueue(!e.target.checked);
  }

  return (
    <section>
      <Header value={queue} handleChange={handelValue}/>
      {queue ? <Queue queue={queue}/> : <Todo queue={queue}/>}
    </section>
  );
}

export default App;
