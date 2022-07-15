import React from 'react';
import Table from './table';
import TabsRender from '../container/tabs';
import Grid from '../container/grid';

export default function MarketPage(){
    return(
        <div className='flex flex-row container  split'>
            <div className='basis-1/4'>
                <Table  />
            </div>
            
            <div className='basis-3/4 left'>
                <TabsRender />
                <Grid />
               
            </div>
        </div>
    )
}