import Note from "./Note";

const SideBar = () => {
  return (
    <div className="sidebar">
       <div className="search">
        <input type="search" placeholder="Search by Title" />
      </div>
      <div className="notes">
        <Note/>
        <Note/>
        <Note/>
      </div>
    </div>
  );
}

export default SideBar;