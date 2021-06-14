import React, { useState } from 'react'
import TodoForm from './TodoForm'
import { BsTrash }from 'react-icons/bs'
import { FaRegEdit }from 'react-icons/fa'

const List = ({ items, completeItem }) => {
    const [edit, setEdit] = useState({ 
        id: null,
        value: ''
     })
    return items.map((item, index) => (
        <div className={item.isComplete ? 'row complete' : 'row'} key={index}>
            <div key={item.id} onClick={() => completeItem(item.id)}>
                {item.text}
            </div>
            <div className='icons'>
                <BsTrash  />
                <FaRegEdit />
            </div>

        </div>
    ))
}

export default List

