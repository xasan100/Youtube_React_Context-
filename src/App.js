import { useContext } from 'react';
import './App.css';
import "./App.css"
import Navbar from './Components/About/About';
import { Main } from './Components/Main/Main';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { SideBarHiddenContext } from './Context/SidebarHidden';

function App() {

  const [state, setState] = useContext(SideBarHiddenContext);

  return (
    <div className='container'>
      <Navbar />
      <div className='MainSidebar' style={{ paddingLeft: `${state ? '250px' : '0px'}`, transition: '.2s'}}>
        <Sidebar />
        <Main />

      </div>
    </div>
  );
}

export default App;
