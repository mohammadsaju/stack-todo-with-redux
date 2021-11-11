import React from 'react';
import Search from './search/Search';
import Controller from './controller/Controller';
import ListView from './view/ListView';
import TableView from './view/Table';
import Modal from './modal/Modal';
import { useSelector } from 'react-redux';

const Todo = () => {
    const {view, isTodoForm} = useSelector((state) => state.todo);
    return (
        <div>
            <section className="px-10 py-20">
              <h1 className="text-center text-gray-600 font-roboto text-3xl mb-8 font-medium">My Todos</h1>
              <Search/>
              <Controller/>
              {view === 'list' ? (<ListView/>):( <TableView/>)}
              {isTodoForm && <Modal/>}
            </section>
        </div>
    )
}

export default Todo
