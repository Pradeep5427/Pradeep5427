import React from 'react';
import hLogo from '../assets/head.webp';
import Dropdown from '../containers/dropdown';
import { CalendarIcon } from '@heroicons/react/solid';
import { BellIcon } from '@heroicons/react/solid';
import { DownloadIcon } from '@heroicons/react/solid';
import { CogIcon } from  '@heroicons/react/solid'

export default function Logobar(){
    return(
        <div className='logobar flex flex-row'>
            {/* section===1 */}
        <div className='logobar-left flex'>
          <img src={hLogo} alt="..." className='logo' />
           {/* Dropdown button */}
          <Dropdown />
        </div>


          {/* section===2 */}

          <div className='logobar-right flex'>

            <div className='flex mx-3'>
             <span><h3 className='text-base'>Release Notes</h3></span>   
                <span className='square'></span>
            </div>

            <div>
           <button className="flex  text-white-100  duration-150 rounded-lg mx-3">
           <DownloadIcon className="h-6 w-6 text-white-500" />
           <span className="inline-flex items-center mt-1  justify-center ml-1 px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">1</span>
           </button>
           </div>

           <div>
           <button className="flex  text-white-100  duration-150 rounded-lg mx-3 ">
           <CalendarIcon className="h-6 w-6 text-white-500" />
           <span className="inline-flex items-center badge ml-2 justify-center px-2 py-1 text-xs font-bold leading-none  bg-red-600 rounded-full">0</span>
           </button>
           </div>

           <div>
           <button className="flex  text-white-100  duration-150 rounded-lg mx-3 ">
           <BellIcon className="h-6 w-6 text-white-500" />
           <span className="inline-flex items-center badge ml-2 justify-center px-2 py-1 text-xs font-bold leading-none  bg-red-600 rounded-full">0</span>
           </button>
           </div>


           <div>
           <button className="flex  text-white-100  duration-150 rounded-lg mx-3 ">
           <h1 className='text-lg '>@Me</h1> 
           <span className="inline-flex items-center badge mt-1 ml-2 justify-center px-2 py-1 text-xs font-bold leading-none  bg-orange-600 rounded-full">1</span>
           </button>
           </div>

           <div className='mx-3 flex list ' >
             <li className='text-base pl-1'>Admin</li>
             <li className='text-base pl-1'>Log in</li>
              <CogIcon className="h-6 w-6 text-white-500" />
           </div>


          </div>

        </div>
    )
}