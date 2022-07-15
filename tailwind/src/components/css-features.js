import React from 'react';
import {SiFastly} from 'react-icons/si';
import {SiPurescript} from 'react-icons/si';
import {GrDocumentCloud} from 'react-icons/gr';
import {GiFeatheredWing} from 'react-icons/gi';




export default function CssFeatures(){
    return(

        <div className='containers' style={{maxWidth:'90%', margin:'0 auto'}}>


        <div className='features'>

            <div className='topics'>
                <GiFeatheredWing className='data-icon' />
                <h2>Features</h2>
                <p>
                Tailwind CSS makes it quicker to write and maintain the code of your application. By using this 
                utility-first framework, you don't have to write custom CSS to style your application. 
                </p>
            </div>

            <div className='topics'>
            <SiFastly className='data-icon' />
                <h2>Faster</h2>
               
                <p>
                Tailwind CSS makes it quicker to write and maintain the code of your application. By using this 
                utility-first framework, you don't have to write custom CSS to style your application. 
                </p>
            </div>

            <div className='topics'>
            <SiPurescript className='data-icon' />
                <h2>Responsive </h2>
               
                <p>
                Tailwind CSS makes it quicker to write and maintain the code of your application. By using this 
                utility-first framework, you don't have to write custom CSS to style your application. 
                </p>
            </div>

            <div className='topics'>
            <GrDocumentCloud className='data-icon' />
                <h2>Documentation</h2>
                
                <p>
                Tailwind CSS makes it quicker to write and maintain the code of your application. By using this 
                utility-first framework, you don't have to write custom CSS to style your application. 
                </p>
            </div>

        </div>

        </div>
    )
}