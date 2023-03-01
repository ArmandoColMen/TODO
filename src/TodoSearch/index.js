import React from 'react'
import './TodoSearch.css';
import { TodoContext } from '../TodoContext'

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);

  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className="TodoSearch">
      <input
        placeholder='🔎'
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  );
};

export { TodoSearch };