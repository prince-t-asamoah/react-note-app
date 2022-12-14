import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { viewNote, noteStatus } from "../redux/noteSlice";

const Content = () => {
  const viewNoteState = useSelector(viewNote);
  const noteStatusState = useSelector(noteStatus);
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [pageTitle, setPageTitle] = useState('New Note');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    if (Object.keys(viewNoteState).length !== 0) {
      setNoteTitle(viewNoteState.title);
      setNoteContent(viewNoteState.content);
    }
  }, [viewNoteState]);

  useEffect(() => {
    if (noteStatusState.isView) {
      setPageTitle('View Note');
    }
  }, [noteStatusState]);

  const resetForm = () => {
    setNoteTitle('');
    setNoteContent('');
    setPageTitle('New Note');
    setIsDisabled(false);
  }

  return (
    <div className="content">
      <h2>{pageTitle}</h2>
      <form>
        <div className="buttons">
          <button type="button" className="primary" onClick={resetForm}>New</button>
          <button type="button" className="secondary">Edit</button>
          <button type="button" className="danger">Delete</button>
        </div>
        <div className="body">
          <input type="text" placeholder="Title" defaultValue={noteTitle} disabled={isDisabled} autoFocus/>
          <textarea rows="15" placeholder="Enter notes..." defaultValue={noteContent} disabled={isDisabled}>
          </textarea>
        </div>
        <div className="footer">
          <button type="submit" className="success" disabled={isDisabled}>Add notes</button>
        </div>
      </form>
    </div>
  );
}

export default Content;