import telegramLogo from '../telegram.svg';
import whatsappLogo from '../whatsapp.svg';
import notavailableLogo from '../notavailable.svg';


const Item = ({ title, url, whatsapp, telegram }) => {//destructuring props in the components signature 

    return (
        <tr className="is-centered">
            <td className="subject" href={url}>{title}</td>
            <td className="level-right">
                {whatsapp === 'n/a' ? (
                    <a role="link" aria-disabled="true"
                        className="is-small m-1 is-fullwidth">
                        <img src={notavailableLogo} alt="" />
                    </a>
                ) : (
                    <a href={whatsapp}
                        className="is-small m-1 is-fullwidth " target="_blank">
                        <img src={whatsappLogo} alt="" />
                    </a>
                )}

                {telegram === 'n/a' ?
                    (
                        <a role="link" aria-disabled="true"
                            className="is-small m-1 is-fullwidth">
                            <img src={notavailableLogo} alt="" />
                        </a>
                    ) : (
                        <a href={telegram}
                            className="is-small m-1 is-fullwidth" target="_blank">
                            <img src={telegramLogo} alt="" />
                        </a>
                    )
                }


            </td>
        </tr>
    );
};

export default Item;







