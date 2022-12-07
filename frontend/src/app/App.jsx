import './App.scss';
import SideBar from '../components/SideBar';
import Content from '../components/Content';

function App() {
  return (
    <div>
      <h1>React Note App</h1>
      <div className='container'>
        <SideBar/>
        <Content/>
      </div>
    </div>
  )
}

export default App;
