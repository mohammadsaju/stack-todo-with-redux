import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {changeView, handleFilter, clearSelected, clearCompleted, reset} from '../../features/counterSlice';

const Controller = () => {
  const dispatch  = useDispatch();
  const { view, todos} = useSelector((state) => state.todo);
  const handleChange = (event) => {
    dispatch(changeView(event.target.value))
  }
  const handleClick = (filterText) => {
    dispatch(handleFilter(filterText));
  }
  const handleSelect = () => {
    dispatch(clearSelected())
  }
  const handleComplete = () => {
    dispatch(clearCompleted())
  }
  const handleReset = () => {
    dispatch(reset())
  }
    return (
        <div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="pt-5">
            <button onClick={() => handleClick('all')} className="border-2 border-gray-300 px-3 py-1 text-gray-600 font-roboto hover:bg-green-400 focus:bg-green-400">All</button>
            <button onClick={() => handleClick('runing')} className="border-2 border-gray-300 px-3 py-1 text-gray-600 font-roboto hover:bg-green-400 focus:bg-green-400">Running</button>
            <button onClick={() => handleClick('completed')} className="border-2 border-gray-300 px-3 py-1 text-gray-600 font-roboto hover:bg-green-400 focus:bg-green-400">Completed</button>
          </div>
          <div className="flex gap-5">
            <div className="flex items-center gap-1">
              <input type="radio" onChange={handleChange} checked={view === 'list'} value='list'/>
              <p className="font-medium text-gray-600">listview</p>
            </div>
            <div className="flex items-center gap-1">
              <input type="radio" onChange={handleChange} checked={view === 'table'} value='table'/>
              <p className="font-medium text-gray-600">Tableview</p>
            </div>
          </div>
          <div>
            <button onClick={handleSelect} className="border-2 border-gray-300 px-3 py-1 text-gray-500 font-medium hover:bg-green-400 focus:bg-green-400">Clear selected</button>
            <button onClick={handleComplete} className="border-2 border-gray-300 px-3 py-1 text-gray-500 font-medium hover:bg-green-400 focus:bg-green-400">Clear completed</button>
            <button onClick={handleReset} className="border-2 border-gray-300 px-3 py-1 text-gray-500 font-medium hover:bg-green-400 focus:bg-green-400">Reset All</button>
          </div>
        </div>
       
        </div>
    )
}

export default Controller
