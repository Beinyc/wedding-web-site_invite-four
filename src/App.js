import './App.css';
import Company from './components/company/company';

import Header from './components/header/Header';
import Main from './components/main/Main';
import Menu from './components/menu/Menu';
import Schedule from './components/schedule/Schedule';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Menu/>
      <Schedule/>
      <Company/>
    </div>
  );
}

export default App;
