import React from 'react';
import {PaperAirplaneIcon,
        DocumentAddIcon,
        ArrowCircleLeftIcon,
        PaperClipIcon,
        PlusCircleIcon,
        TrashIcon,
        TrendingUpIcon,
        ArrowsExpandIcon,
        BadgeCheckIcon
} from '@heroicons/react/solid';

export default function NavbarLeft(){
  return(
    <div className='flex'>


    <div>
    <div className="h-8 w-8 nav-icon  " ><PaperAirplaneIcon /></div>
    <p className='text'>New</p>
    </div>  

      <div>
      <div className="h-8 w-8 nav-icon  ml-5 " ><BadgeCheckIcon />
      <p className='text'>Recent</p>
      </div>
      </div>

     <div>
     <div className="h-8 w-8 nav-icon ml-5 " ><DocumentAddIcon />
      <p className='text'>Dashboard</p>
      </div>
     </div>

      <div>
      <div className="h-8 w-8 nav-icon ml-5  " ><ArrowCircleLeftIcon />
      <p className='text'>Leads</p>
      </div>
      </div>

      <div>
      <div className="h-8 w-8 nav-icon ml-5  " ><PaperClipIcon />
      <p className='text'>Jobs</p>
      </div>
      </div>

     <div>
     <div className="h-8 w-8 nav-icon  ml-5 " ><PlusCircleIcon />
      <p className='text'>Track</p>
      </div>
     </div>

      <div>
      <div className="h-8 w-8 nav-icon  ml-5 " ><TrashIcon />
      <p className='text'>ReportPlus</p>
      </div>
      </div>

     <div>
     <div className="h-8 w-8 nav-icon ml-5 " ><TrendingUpIcon />
      <p className='text'>Production</p>
      </div>
     </div>

      <div>
      <div className="h-8 w-8 nav-icon ml-5 " ><ArrowCircleLeftIcon />
      <p className='text'>Tools</p>
      </div>
      </div>

      <div>
      <div className="h-8 w-8 nav-icon ml-5 " ><ArrowsExpandIcon />
      <p className='text'>Directory</p>
      </div>
      </div>
     

    </div>
  )
}