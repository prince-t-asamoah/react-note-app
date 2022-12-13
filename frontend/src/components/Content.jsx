import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { viewNote } from "../redux/noteSlice";

const Content = () => {
  const viewNoteState = useSelector(viewNote);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (Object.keys(viewNoteState).length !== 0) {
      setTitle(viewNoteState.title);
      setContent(viewNoteState.content);
    }
  }, [viewNoteState]);

  return (
    <div className="content">
      <h2>New Note</h2>
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