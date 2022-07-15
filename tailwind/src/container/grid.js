import React from 'react';
import {AcademicCapIcon,AdjustmentsIcon,AnnotationIcon,ArchiveIcon,ClockIcon} from '@heroicons/react/solid'

export default function Grid(){
    return(
        <div className="grid grid-cols-5 py-3 gap-4 container content-center	">
  <div className='message'>
  <AcademicCapIcon className='h-8 w-8 grid-icon '  />
  <p className='text-sm'>Education</p>
  </div>

  <div className='message' >
  <AdjustmentsIcon className='h-8 w-8 grid-icon '  />
  <p className='text-sm'>Adjustment</p>
  </div>

  <div className='message'>
  <AnnotationIcon className='h-8 w-8 grid-icon '  />
  <p className='text-sm'>Annotation</p>
  </div>

  <div className='message'>
  <ArchiveIcon className='h-8 w-8 grid-icon '  />
  <p className='text-sm'> Archieve</p>
  </div>

  <div className='message'>
  <ClockIcon className='h-8 w-8 grid-icon '  />
  <p className='text-sm'>Time</p>
  </div>
  
  </div>
    )
}