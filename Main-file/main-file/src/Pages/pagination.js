import React,{useState, useEffect} from 'react';
import PageFunction from './page-function';
import Post from './post';

const url = "https://jsonplaceholder.typicode.com/comments";
export default function Pagination(){
    const [posts,setPosts] = useState([]);
    const [errors,setErrors] =  useState('');

    useEffect(()=>{
        fetch(url).then((response)=>{
            if (response.ok) return response.json();
            throw new Error('something went wrong while requesting posts');
        })
        .then ((posts)=>setPosts(posts))
        .catch((errors)=>setErrors(errors.message))
    },[]);
    if (errors) return <h1>{errors}</h1>;



    return(
        <div>
            {posts.length > 0 ? (
        <>
          <PageFunction
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) : (
       <h1>No Posts to display</h1>
      )}

        </div>
    )
}


