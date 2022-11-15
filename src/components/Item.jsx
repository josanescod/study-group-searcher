import * as React from 'react';

const Item = ({ title, url, whatsapp, telegram }) => (   //destructuring props in the componen'ts signature 
    <li>
        <span>
            <a href={url}>{title}</a>
        </span>
        <br />
        <span>{whatsapp}</span>
        <br />
        <span>{telegram}</span>
        <br />
        <br />
        

    </li>


);



export default Item;