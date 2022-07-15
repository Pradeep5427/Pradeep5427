import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import {BiEditAlt} from 'react-icons/bi';
import {MdDelete} from 'react-icons/md';

export default function ListItem({lists,onHandleEdit,onDelete}){

  const {t} = useTranslation();

   

    return(
        <Table responsive>
            <thead>
                <tr>
                    <td>{t('ID')}</td>
                    <td>{t('Name')}</td>
                    <td>{t('Email')}</td>
                    <td>{t('Phonenumber')}</td>
                    <td>{t('Password')}</td>
                   <td>{t('Action')}</td>
                </tr>
            </thead>
            <tbody>
             
                {lists && lists.map((list,index)=>(
                        <tr key={index} >
                            <td>{index + 1 }</td>
                            <td>{list.name}</td>
                            <td>{list.email}</td>
                            <td>{list.number}</td>
                            <td>{list.password}</td>
                            
                            <td>
                                < BiEditAlt className='edit' onClick={()=>onHandleEdit(list)}/>
                                <MdDelete className='delete' onClick={()=>onDelete(list)} />
                            </td>
                        </tr>
                ))}
            </tbody>
        </Table>
    )
}