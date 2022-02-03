
import './App.css';
import {Routes,Route} from 'react-router-dom';
// import {Routes,Route} from 'react-router-dom';
import Navigation from './components/Navigation /Navigation';
import Records from './pages/records'
import RecordsAdd from './pages/recordsAdd';
import ContextProvider from './context/context';





function App() {
  return (
    <div className="App">
    <Navigation/>

    <ContextProvider>
    <Routes>
  <Route path="/" element={<Records/>}/>
  <Route path="/records" element={<Records/>}/>
  <Route path="/recordsadd" element={<RecordsAdd/>}/>
    </Routes>
    </ContextProvider>
   
   
    
    </div>
  );
}

export default App;
