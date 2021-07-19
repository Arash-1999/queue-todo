// list component for showing jobs
import ".//Jobs.scss";

const Jobs = (props) => {
  return (
    <section className="list">
      <h3 className="list__title">{props.title}</h3>
      <ul className="list__container">
        {props.queue === true ? props
          .queues
          .map((item, index) => {
            return (
              <li key={index} className="list__item">
                <div>
                  <p>{item.job}</p>
                  <p className="list__date" >{item.date ? item.date.join("/") : null}</p>
                </div>
                <button onClick={props.removeHandler} className="list__remove">Done</button>
              </li>
            );
          }) : 
            props.queues.map((item, index) => {
              return (
                <li key={index} className="list__item">
                  <p>{item}</p>
                  <button onClick={props.removeHandler} className="list__remove">Done</button>
                </li>
              );
          })}
      </ul>
    </section>
  );
};

export default Jobs;
