import { useState, createContext } from "react";

import Header from "./Header/Header.js";
import Queue from "./Queue/Queue.js";
import Todo from "./Todo/Todo.js";

export const QueueContext = createContext(true);

const App = () => {
  const [queue, setQueue] = useState(true);
  
  const handelValue = (e) => {
    setQueue(!e.target.checked);
  }

  return (
    <section>
      <Header value={queue} handleChange={handelValue}/>
      <QueueContext.Provider value={queue}>
        {queue ? <Queue queue={queue}/> : <Todo queue={queue}/>}
      </QueueContext.Provider>
    </section>
  );
}

export default App;
