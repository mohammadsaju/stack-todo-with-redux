import { createSlice } from '@reduxjs/toolkit';
import shortid from 'shortid';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:[ 
        {
            id: 'dkfjdfdkjf',
            text: 'react is awesome',
            description: 'yo yo you fa pa pui',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dfedfdre',
            text: 'dambo is a killer person',
            description: 'he is very very noughty man',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dfedfgfgfdre',
            text: 'he is panu',
            description: 'he is very very noughty man',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
    ],
    displayTodos:[ 
        {
            id: 'dkfjdfdkjf',
            text: 'react is awesome',
            description: 'yo yo you fa pa pui',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dfedfdre',
            text: 'dambo is a killer person',
            description: 'he is very very noughty man',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
        {
            id: 'dfedfgfgfdre',
            text: 'he is panu',
            description: 'he is very very noughty man',
            time: new Date().toDateString(),
            isComplete: false,
            isSelect: false
        },
    ],
    view: 'list',
    isTodoForm: false, 
    filter: 'all',
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = 
        {
          id: shortid.generate(),
          text: action.payload.text,
          description: action.payload.description,
          time: new Date().toDateString(),
          isComplete: false,
          isSelect: false
        }
      state.todos = [...state.todos, todo];
      state.isTodoForm = false
      
    },
    updateTodo: (state, action) => {

    },
    deleteTodo: (state, action) => {

    },
    changeView: (state, action) => {
      state.view = action.payload
    },
    openTodoForm: (state) => {
      state.isTodoForm = !state.isTodoForm
    },
    closeTodoForm: (state) => {
      state.isTodoForm = false
    },
    toggleSelect: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.isSelect = !todo.isSelect
    },
    toggleComplete: (state, action) => {
      const todo = state.todos.find(todo => todo.id === action.payload);
      todo.isComplete = !todo.isComplete
    },
    handleFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearSelected: (state) => {
      const todos = state.todos.filter(todo => !todo.isSelect);
      state.todos = todos;
    },
    clearCompleted: (state) => {
      const todos = state.todos.filter(todo => !todo.isComplete);
      state.todos = todos;
    },
    reset: (state) => {
      state.isTodoForm = false;
      state.view = 'list';
      state.filter = 'all';
    }, 
    searchTerm: (state, action) => {
      const searchText = action.payload;
      const todos = state.displayTodos.filter(todo => todo.text.toLowerCase().includes(searchText))
      state.todos = todos;
    },

  }
})
export const {addTodo, updateTodo, deleteTodo, changeView, openTodoForm, closeTodoForm, toggleSelect, toggleComplete, handleFilter, clearSelected ,clearCompleted, reset, searchTerm} = todoSlice.actions;
export default todoSlice.reducer;