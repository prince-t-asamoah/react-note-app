import { useDispatch } from "react-redux";
import { view } from "../redux/noteSlice";

const Note = ({id, title}) => {
  const dispatch = useDispatch();

  const handleView = () => {
    dispatch(view(id));
  }

  return (
    <div className="note">
     <div className="header">
        <h2>{title}</h2>
      </div>
      {/* <div className="footer">
        <span className="view button" onClick={handleView}>
          View
        </span>
        <span className="edit button">Edit</span>
        <span className="delete button">Delete</span>
      </div> */}
    </div>
  );
}

export default Note;