import Note from "./Note";
import { fetchAllNoteAPI, allNotesState, noteStatusState} from "../redux/noteSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const SideBar = () => {
  const dispatch = useDispatch();
  const allNotes = useSelector(allNotesState);
  const noteStatus = useSelector(noteStatusState);
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    dispatch(fetchAllNoteAPI());
    if (noteStatus.hasLoaded) {
      setShowMessage(false);
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
          <p>{noteStatus.message}</p> : 
          allNotes.map(note => <Note key={note.id} title={note.title}/>)
        }
      </div>
    </div>
  );
}

export default SideBar;