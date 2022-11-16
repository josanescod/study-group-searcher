import telegramLogo from '../telegram.svg';
import whatsappLogo from '../whatsapp.svg';
const Item = ({ title, url, whatsapp, telegram }) => (//destructuring props in the components signature 
    <li className="w-full ">
        <br />

        <a className="text-slate-600 border-transparent border-b-2 hover:border-gray-600" href={url}>{title}</a>
        <a href={telegram}
            className="float-right ml-5 px-6 bg-blue-500 rounded" target="_blank">
            <img src={telegramLogo} alt="" />
        </a>
        <a href={whatsapp}
            className="float-right ml-5 px-6 bg-green-500 rounded" target="_blank">
            <img src={whatsappLogo} alt="" />
        </a>
        
        <br />
        <br />
    </li>
);

export default Item;







