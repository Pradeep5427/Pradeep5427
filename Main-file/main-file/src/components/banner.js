import React from 'react';
import banner from "../images/AI.jpg";

export default function Banner(){
    return(
        <div className="banner">
        <img src={banner} alt= "" />
       
        <h1 className="ban-tit">WEB <br />DEVELOPMENT</h1>
       
        </div>
    )
}