import React from 'react';
import { Table } from 'react-bootstrap';
import {BiEditAlt} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

export default function ListItem({lists,onHandleEdit,onDelete}){

    const isCheckedMoreThanOne = lists.filter(list => list.completed)?.length <= 1;


    return(
        <Table responsive>
            <thead>
                <tr>
                    <td>id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Password</td>
                   <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                {lists && lists.map((list)=>(
                        <tr key={list.id} className={list.completed ? 'selected' : ''}>
                            <td>{list.id}</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.number}</td>
                            <td>{list.password}</td>
                            <td>
                             {isCheckedMoreThanOne &&   <  BiEditAlt className='edit' onClick={()=>onHandleEdit(list)}/>}
                                <MdDelete className='delete' onClick={()=>onDelete(list)} />
                            </td>
                        </tr>
                ))}
            </tbody>
        </Table>
    )
}