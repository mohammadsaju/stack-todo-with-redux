import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {closeTodoForm, addTodo} from '../../features/counterSlice';

const Modal = () => {
  const [text, setText] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeTodoForm())
  }
  const handleAdd = () => {
    dispatch(addTodo({text, description}));
    setText('');
    setDescription('');
  }
    return (
        <div>
      <div className="w-96 mx-auto rounded-lg border border-gray-300 shadow-xl">
        <div
          className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg w-full"
        >
          <p className="font-roboto text-xl text-gray-600">Create new todo item</p>
          <svg onClick={handleClick}
            className="w-6 h-6 text-red-600 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <p className="mb-2 font-semibold text-gray-600">Add Task</p>
          <input className="py-2 border rounded-sm px-5 mb-4 focus:outline-none" type="text" placeholder="Add Task..." value={text} onChange={(e) => setText(e.target.value)}/>
          <p className="mb-2 font-semibold text-gray-600">Describe Task</p>
          <textarea
            type="text"
            name=""
            placeholder="Describe task..."
            className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm focus:outline-none"
            value={description} onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button onClick={handleAdd} type='submit' className="bg-green-500 px-5 py-2 rounded-full text-white font-roboto hover:bg-green-400">Submit Task</button>
        </div>
      </div>
        </div>
    )
}

export default Modal
