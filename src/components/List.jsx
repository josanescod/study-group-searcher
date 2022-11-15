import { useState } from 'react';
import Item from './Item';

const List = ({ list }) => {


    //console.log(`test:`,props.data)
    return (
        <div>
            <ul>

                {
                    list.map(({ objectID, ...item }) => (
                        <Item key={objectID} {...item} />))
                }
            </ul>
        </div>


    );
};

export default List;