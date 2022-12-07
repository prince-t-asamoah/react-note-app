const Note = ({title}) => {
  return (
    <div className="note">
     <div className="header">
        <h2>{title}</h2>
      </div>
      <div className="footer">
        <span className="view button">View</span>
        <span className="edit button">Edit</span>
        <span className="delete button">Delete</span>
      </div>
    </div>
  );
}

export default Note;