import { useState } from 'react'
import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState([]);

  let addList = (inputText)=>{
    if(inputText !== '')
      setTodoList([...todoList, inputText]);

  }

  const deleteListItem = function(key){
    let newListTodo = [...todoList];
    newListTodo.splice(key, 1);
    setTodoList([...newListTodo])
  }

  return (
    <div className='outer-container'>
        <div className="inner-container">
            <TodoInput addList = {addList}></TodoInput>
            <h1 className="app-heading">TODO</h1>
            <hr />
            {todoList.map(function(listItem, i){
              return (
                <TodoList index = {i} key = {i} item = {listItem} deleteItem = {deleteListItem}/>
              )
            })}
        </div>      
    </div>
  )
}

export default App
