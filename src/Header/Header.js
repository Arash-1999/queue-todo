import "./Header.scss";

const Header = (props) => {

  return (
    <header>
      <div className="title">
        <h3 className="title__head">Queue / Todo</h3>
        <p className="titile__desc">mange your jobs in oredered / unordered list</p>
      </div>
      <div className="mode">
        <p className="mode__option">Queue</p>
        <input type="checkbox" className="mode__checkbox" id="switch" value={props.value} onChange={props.handleChange}/>
        <label htmlFor="switch"className="mode__slider"></label>
        <p className="mode__option">Todo</p>
      </div>
    </header>
  );
};

export default Header;
