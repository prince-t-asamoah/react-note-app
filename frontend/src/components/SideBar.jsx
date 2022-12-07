import Note from "./Note";

const SideBar = () => {
  return (
    <div className="sidebar">
       <div className="search">
        <input type="search" placeholder="Search by Title" />
      </div>
      <div className="notes">
        <Note title={"Item 1"}/>
        <Note title={"Item 2"}/>
        <Note title={"Item 3"}/>
      </div>
    </div>
  );
}

export default SideBar;