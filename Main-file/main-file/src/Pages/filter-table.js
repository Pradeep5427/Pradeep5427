import React,{useState} from 'react';
import '../App.css';
//import Pagination_button from './pagination-button';

const Details = [
    { id: 1, name: 'Andy', age: 32 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Tom Hulk', age: 40 },
    { id: 4, name: 'Tom Hank', age: 50 },
    { id: 5, name: 'Audra', age: 30 },
    { id: 6, name: 'Anna', age: 68 },
    { id: 7, name: 'Tom', age: 34 },
    { id: 8, name: 'Tom Riddle', age: 28 },
    { id: 9, name: 'Bolo', age: 23 },
  ];

function Filter_table(rows){
    const [name,setName] = useState('');
    const [search,setSearch] = useState(Details);
   

   const filter = (e) => {
        const target = e.target.value;
        if(target !== ''){
            const results = Details.filter((detail)=>{
                return detail.name.toLowerCase().startsWith(target.toLowerCase())
            });
            setSearch(results)
        }else{
            setSearch(Details)
        }
        setName(target);
    }

    return (
        <div className='Data'>
            <input type="text" onChange={filter} value={name} className="input" placeholder="Filter"  />
            <div className='list'>
                {search && search.length > 0 ? (
                    search.map((list)=>(
                        <li key={list.id} className="details-list">
                            <span className='detail-id'>{list.id}</span>
                            <span className='detail-name'>{list.name}</span>
                            <span className='detail-age'>{list.age}</span>
                        </li>
                    ))
                
                ):(
                    <h1>no Details Found</h1>
                )
                }

            </div>
            
        </div>
    )
    
}

export default Filter_table;
