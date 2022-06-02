import React ,{useState} from 'react';
import Memo from './memo';

export default function ReactMemo(){
    const [memo,setMemo] = useState(0);
     return(
        <div>
            <Memo name="React functional PureComponent" />
            <p>Counter is : {memo} </p>
            <button onClick={() => setMemo(memo + 1)}>Click</button>

        </div>
    )
}
