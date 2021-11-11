import React from 'react'
import { useDispatch } from 'react-redux';
import {openTodoForm, searchTerm} from '../../features/counterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openTodoForm())
  }
  const handleSearch = (e) => {
    dispatch(searchTerm(e.target.value))
  }
    return (
        <div>
        <div className="flex justify-center gap-2">
          <input className="border-2 border-green-500 px-4 py-2 text-green-500 placeholder-green-600 bg-gray-50 focus:outline-none focus:shadow-inner" type="text" placeholder="serch...." onChange={handleSearch}/>
          <button onClick={handleClick} className="border-2 border-yellow-300 px-3 py-2 text-gray-500 font-roboto hover:bg-gray-100 transition">create todo</button>
        </div>
        </div>
    )
}

export default Search
