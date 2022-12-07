const Content = () => {
  return (
    <div className="content">
      <h2>New Note</h2>
      <form>
        <div className="body">
          <input type="text" placeholder="Title"/>
          <textarea rows="15" placeholder="Enter notes..."></textarea>
        </div>
        <div className="footer">
          <button type="submit">Add notes</button>
        </div>
      </form>
    </div>
  );
}

export default Content;