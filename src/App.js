import { Cross } from './cross';
import './App.css';
import {Multiselect} from 'multiselect-react-dropdown';
import { useState } from 'react';

function App() {
  const [options] = useState([{name: 123, id: 1},{name: 4321, id: 2}]);
  return (
    <div className="App">
      <Multiselect options={options} displayValue="name" singleSelect />

      <Multiselect
    options={
        [
            {id: 1, name: 'Option 1'},
            {id: 2, name: 'Option 2'},
            {id: 3, name: 'Option 3'}
        ]
    }
    displayValue="name"
    showCheckbox
    placeholder="My placeholder tetssgfjsgfjsgfjsdfsfsfsfsfjsgjsdgfjsgfjsgf"
    selectedValues={
        [
            {id: 1, name: 'option 1'},
            {id: 2, name: 'option 2'}
        ]
    }
    disablePreSelectedValues
    onSelect={
        (selectedList, selectedItem) => console.log('select', selectedList, selectedItem)
    }
    onRemove={
        (selectedList, selectedItem) => console.log('remove', selectedList, selectedItem)
    }
/>

      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header>
    </div>
  );
}

export default App;
