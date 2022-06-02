import React,{memo} from 'react';

 function Memo({name}){
    console.log("Memo function");
    return(
        <div>
            <lable><b>{name}</b></lable>
        </div>
    );
}
export default memo(Memo);