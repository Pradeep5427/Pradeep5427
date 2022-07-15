import React from 'react';

export default function Flex(){
    return(
        <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="test row-span-3 ...">01<br/>
        01<br/>
        01<br/>
        01<br/>
        01<br/>01<br/>01<br/>
        01<br/>
        01<br/>
        01<br/>
        </div>
        <div class="test col-span-2 ...">02</div>
        <div class="test row-span-2 col-span-2 ...">03</div>
      </div>
    )
}