import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {toggleSelect, toggleComplete} from '../../features/counterSlice';

const Table = () => {
  const dispatch = useDispatch();
  const {todos}  = useSelector((state) => state.todo);
  const handleSelect = (id) => {
    dispatch(toggleSelect(id))
  }
  const handleComplete = (id) => {
    dispatch(toggleComplete(id))
  }
    return (
        <div>
        <div className="mx-auto md:px-32 py-8 max-w-5xl">
          <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="text-left py-3 px-4 text-lg">#</th>
                  <th className="text-left py-3 px-4 text-md font-roboto">Time</th>
                  <th className="text-left py-3 px-4 text-md font-roboto">Todo</th>
                  <th className="text-left py-3 px-4 text-md font-roboto">Action</th>
                </tr>
              </thead>
            <tbody className="text-gray-700">
              {todos.map(todo => (
                <tr key={todo.id} className="border-b">
                <td className="text-left py-3 px-4 font-roboto text-gray-600"><input type="checkbox" checked={todo.isSelect} onChange={() => handleSelect(todo.id)} /></td>
                <td className="text-left py-3 px-4 font-roboto text-gray-600">{todo.time}</td>
                <td className="text-left py-3 px-4 font-roboto text-gray-600">{todo.text}</td>
                <td className="text-left py-3 px-4"><button onClick={() => handleComplete(todo.id)} className={` ${todo.isComplete ? 'bg-red-500': 'bg-green-500'} px-5 py-2 rounded-full text-white font-roboto`}>{todo.isComplete ? "Completed" : "Running"}</button></td>
              </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
        </div>
    )
}

export default Table
