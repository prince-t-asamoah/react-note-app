import { useState } from "react";

const Content = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
 
  return (
    <div className="content">
      <h2>New Note</h2>
      <form>
        <div className="body">
          <input type="text" placeholder="Title" defaultValue={title}/>
          <textarea rows="15" placeholder="Enter notes..." defaultValue={content}></textarea>
        </div>
        <div className="footer">
          <button type="submit">Add notes</button>
        </div>
      </form>
    </div>
  );
}

export default Content;