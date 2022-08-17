import './App.css';
import "./App.css"
import { About } from './Components/About/About';
import { Main } from './Components/Main/Main';
import { Sidebar } from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className='container'>
     <About/>
    <div className='MainSidebar'>
        <Sidebar />
        <Main />
       
    </div>
    </div>
  );
}

export default App;
