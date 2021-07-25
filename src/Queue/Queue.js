import { useState } from "react";

import Jobs from "./../Jobs/Jobs";
import Dashboard from "./../Dashboard/Dashboard.js";

import { radix } from "./sort.js";

let list = [
  {date: [], job: "Please type and add your tasks"},
];

const Queue = (props) => {
  const [queues, setQueues] = useState(list);
  const [current, setCurrent] = useState({date: [1400, 1, 1], job: ""});

  // event listener for controling dashboard inputs
  const handleChange = (e) => {
    let newState = Object.assign({}, current);

    switch(e.target.dataset.key) {
      case "job": 
        newState.job = e.target.value;
        break;
      case "day":
        newState.date[2] = e.target.value;
        break;
      case "month":
        newState.date[1] = e.target.value;
        break;
      case "year":
        newState.date[0] = e.target.value;
        break;
      default:
        console.log("oops! something went wrong");
        break;
    }

    setCurrent(newState);
  }

  // event listener for adding new queues
  const handleSubmit = (e) => {
    e.preventDefault();
    if(current.job === "") return 0;
    let newState = [...queues, current];

    newState = radix(newState);

    setQueues(newState)
    setCurrent({date: [1400, 1, 1], job: ""});
  }
  
  // event listener for removing jobs
  const removeHandler = (e) => {
    let job = e.target.parentElement.firstChild.firstChild.textContent,
      newState = [...queues],
      idx = queues.findIndex(item => item.job === job);

    newState = newState.slice(0, idx).concat(newState.slice(idx + 1));

    if(newState.length !== 0) {
      newState = radix(newState);
    }

    setQueues(newState);
  }

  return (
    <main className="main">
      <Jobs 
        removeHandler={removeHandler}
        queues={queues.length === 0 ? [{job: "Please type and add your tasks", date: []}] : queues} />
      <Dashboard
        value={current}
        handleChange={handleChange}
        handleSubmit={handleSubmit}/>
    </main>
  );
};

export default Queue;
