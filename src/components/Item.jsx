import telegramLogo from '../telegram.svg';
import whatsappLogo from '../whatsapp.svg';
const Item = ({ title, url, whatsapp, telegram }) => (//destructuring props in the components signature 
    <tr className="is-centered">        
        <td className="subject" href={url}>{title}</td>
        <td className="level-right">
        <a href={whatsapp}
                    className="is-small m-1 is-fullwidth " target="_blank">
                <img src={whatsappLogo} alt="" />                
                </a>
                <a href={telegram}
                    className="is-small m-1 is-fullwidth" target="_blank">
                    <img src={telegramLogo} alt="" />                   
                </a>                
        </td>              
    </tr>
);

export default Item;







