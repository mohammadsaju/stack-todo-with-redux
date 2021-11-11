import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {toggleSelect, toggleComplete} from '../../features/counterSlice';

const ListView = () => {
  const dispatch = useDispatch();
  const {todos, filter}  = useSelector((state) => state.todo);
  const handleSelect = (id) => {
    dispatch(toggleSelect(id))
  }
  const handleComplete = (id) => {
    dispatch(toggleComplete(id))
  }
  if(filter === 'runing') {
    const items = todos.filter(todo => !todo.isComplete)
    return(
      <>
      <div className="mx-auto border-2 my-10 max-w-5xl">
      {items.map(todo => (
        <div key={todo.id} className="flex justify-between items-center border-b py-4 px-6">
        <div className="flex items-center gap-4">
          <input type="checkbox" checked={todo.isSelect} onChange={() => handleSelect(todo.id)} />
          <div>
            <p className="font-roboto text-lg text-gray-500">{todo.text}</p>
            <p className="font-roboto text-lg text-gray-500">{todo.time}</p>
          </div>
        </div>
        <button onClick={() => handleComplete(todo.id)} className={` ${todo.isComplete ? 'bg-red-500': 'bg-green-500'} px-5 py-2 rounded-full text-white font-roboto`}>{todo.isComplete ? "Completed" : "Running"}</button>
      </div>
      ))}
      </div>
      </>
    )
  } else if(filter === 'completed') {
    const items = todos.filter(todo => todo.isComplete)
    return(
      <>
      <div className="mx-auto border-2 my-10 max-w-5xl">
      {items.map(todo => (
        <div key={todo.id} className="flex justify-between items-center border-b py-4 px-6">
        <div className="flex items-center gap-4">
          <input type="checkbox" checked={todo.isSelect} onChange={() => handleSelect(todo.id)} />
          <div>
            <p className="font-roboto text-lg text-gray-500">{todo.text}</p>
            <p className="font-roboto text-lg text-gray-500">{todo.time}</p>
          </div>
        </div>
        <button onClick={() => handleComplete(todo.id)} className={` ${todo.isComplete ? 'bg-red-500': 'bg-green-500'} px-5 py-2 rounded-full text-white font-roboto`}>{todo.isComplete ? "Completed" : "Running"}</button>
      </div>
      ))}
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className="mx-auto border-2 my-10 max-w-5xl">
        {todos.map(todo => (
          <div key={todo.id} className="flex justify-between items-center border-b py-4 px-6">
          <div className="flex items-center gap-4">
            <input type="checkbox" checked={todo.isSelect} onChange={() => handleSelect(todo.id)} />
            <div>
              <p className="font-roboto text-lg text-gray-500">{todo.text}</p>
              <p className="font-roboto text-lg text-gray-500">{todo.time}</p>
            </div>
          </div>
          <button onClick={() => handleComplete(todo.id)} className={` ${todo.isComplete ? 'bg-red-500': 'bg-green-500'} px-5 py-2 rounded-full text-white font-roboto`}>{todo.isComplete ? "Completed" : "Running"}</button>
        </div>
        ))}
        </div>
      </>
    )
  }
    return (
        <div>
        {/* <div className="mx-auto border-2 my-10 max-w-5xl">
          {todos.map(todo => (
            <div key={todo.id} className="flex justify-between items-center border-b py-4 px-6">
            <div className="flex items-center gap-4">
              <input type="checkbox" checked={todo.isSelect} onChange={() => handleSelect(todo.id)} />
              <div>
                <p className="font-roboto text-lg text-gray-500">{todo.text}</p>
                <p className="font-roboto text-lg text-gray-500">{todo.time}</p>
              </div>
            </div>
            <button onClick={() => handleComplete(todo.id)} className={` ${todo.isComplete ? 'bg-red-500': 'bg-green-500'} px-5 py-2 rounded-full text-white font-roboto`}>{todo.isComplete ? "Completed" : "Running"}</button>
          </div>
          ))}
        </div> */}
        </div>
    )
}

export default ListView
