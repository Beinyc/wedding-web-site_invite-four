import './App.css';
import Company from './components/company/company';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Schedule from './components/schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Schedule/>
      {/* <Company/> */}
    </div>
  );
}

export default App;
