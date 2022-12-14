import Note from "./Note";
import { 
  fetchAllNoteAPI,
  allNotesState,
  noteStatus
} from "../redux/noteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const allNotes = useSelector(allNotesState);
  const noteStatusState = useSelector(noteStatus);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (noteStatusState.hasLoaded) {
      setShowMessage(false);
    } else {
      dispatch(fetchAllNoteAPI());
    }
  });

  return (
    <div className="sidebar">
       <div className="search">
        <input type="search" placeholder="Search by Title" />
      </div>
      <div className="notes">
       {
          showMessage ?
          <p>{noteStatusState.message}</p> : 
          allNotes.map(note => <Note key={note.id} title={note.title} id={note.id} />)
        }
      </div>
    </div>
  );
}

export default SideBar;