import { useContext } from "react";
import { QueueContext } from "./../App.js";

import TextField from "./../TextField/TextField.js";
import "./Dashboard.scss";


const Dashboard = (props) => {
  let date = props.value.date;
  const queue = useContext(QueueContext);

  return (
    <form onSubmit={props.handleSubmit} className="dashboard">
      <div className="dashboard__task">
        <p className="dashboard__desc" >Type your task: </p>
        <TextField 
          inputKey="job"
          type="test"
          value={queue ? props.value.job : props.value}
          handleChange={props.handleChange}/>
      </div>
    {queue ?
      <div className="dashboard__date">
        <p className="dashboard__desc">Type date for task</p>
        <TextField
          value={date[0]} 
          label="Yaer"
          inputKey="year"
          handleChange={props.handleChange}
          type="number"/>
        <TextField
          value={date[1]} 
          label="Month"
          min={0}
          max={12}
          inputKey="month"
          handleChange={props.handleChange}
          type="number"/>
        <TextField
          value={date[2]} 
          label="Day"
          inputKey="day"
          min={0}
          max={31}
          handleChange={props.handleChange}
          type="number"/>
      </div>
      : null}
      <button type="submit" className="dashboard__submit">Add Job</button>
    </form>
  );
};

export default Dashboard;
