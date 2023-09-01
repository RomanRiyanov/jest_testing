import { useState, useEffect } from 'react';
import './App.css';
import List from '../List/List';
import Search from '../Search/Search';

const data = ['Mercedes', 'Alfa Romeo', 'Zhiguli', 'Volvo', 'Corvette', 'Great Wall', 'Tata'];

function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => {setSearch(e.target.value)}}>
          Find zhoolik:
        </Search>
        <List items={data}/>
      </div>
    </div>
  );
}

export default App;
