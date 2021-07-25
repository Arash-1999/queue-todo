import { useState } from "react";

import Jobs from "./../Jobs/Jobs.js";
import Dashborad from "./../Dashboard/Dashboard.js";


const defaultCase = ["please type and add your tasks"];

const Todo = (props) => {
  const [queues, setQueues] = useState(defaultCase);
  const [current, setCurrent] = useState("");

  const removeHandler = (e) => {
    let job = e.target.parentNode.firstChild.textContent,
      newState = [...queues],
      idx = newState.findIndex(item => item ===  job);

    newState = newState.slice(0, idx).concat(newState.slice(idx + 1));

    setQueues(newState);
  }

  const handleChange = (e) => {
    let newState = e.target.value;
    setCurrent(newState);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let newState = queues === defaultCase ? [current] : [...queues, current];

    setCurrent("");
    setQueues(newState);
  }

  return (
    <section className="main">
      <Jobs
        removeHandler={removeHandler}
        queue={props.queue}
        queues={queues.length === 0 ? defaultCase : queues} />
      <Dashborad
        queue={props.queue}
        value={current}
        handleChange={handleChange}
        handleSubmit={handleSubmit}/>
    </section>
  );
};

export default Todo;
