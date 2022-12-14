import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { viewNote, noteStatus } from "../redux/noteSlice";

const Content = () => {
  const viewNoteState = useSelector(viewNote);
  const noteStatusState = useSelector(noteStatus);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [pageTitle, setPageTitle] = useState('New Note');

  useEffect(() => {
    if (Object.keys(viewNoteState).length !== 0) {
      setTitle(viewNoteState.title);
      setContent(viewNoteState.content);
    }
  }, [viewNoteState]);

  useEffect(() => {
    if (noteStatusState.isView) {
      setPageTitle('View Note');
    }
  }, [noteStatusState]);

  return (
    <div className="content">
      <h2>{pageTitle}</h2>
      <div className="buttons">
        <button type="button" className="primary">New</button>
        <button type="button" className="secondary">Edit</button>
        <button type="button" className="danger">Delete</button>
      </div>
      <form>
        <div className="body">
          <input type="text" placeholder="Title" defaultValue={title} disabled={true}/>
          <textarea rows="15" placeholder="Enter notes..." defaultValue={content} disabled={true}></textarea>
        </div>
        <div className="footer">
          <button type="submit">Add notes</button>
        </div>
      </form>
    </div>
  );
}

export default Content;