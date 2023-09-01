import { useState, useEffect } from 'react';
import './App.css';
import List from '../List/List';
import Search from '../Search/Search';

const data = ['Mercedes', 'Alfa Romeo', 'Zhiguli', 'Volvo', 'Corvette', 'Great Wall', 'Tata'];

function App() {
  const [search, setSearch] = useState('');
  const [items, setItems] = useState(data);

  useEffect(() => {
    setItems(data.filter(item => item.toLocaleLowerCase().includes(search.toLocaleLowerCase())));
    if (!search) setItems(data);
  }, [search])

  return (
    <div className="App">
      <div className="App-header">
        <Search value={search} onChange={(e) => {setSearch(e.target.value)}}>
          Find zhoolik:
        </Search>
        <List items={items}/>
      </div>
    </div>
  );
}

export default App;
