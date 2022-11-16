
const Item = ({ title, url, whatsapp, telegram }) => (//destructuring props in the components signature 
    <li>
        <br />
        <span>
            <a href={url}>{title}</a>

            <a href={telegram}
                class="float-right ml-5  px-6 py-3 text-blue-100 no-underline bg-blue-500 rounded hover:bg-blue-600  hover:text-blue-200" target="_blank">Telegram
            </a>
            <a href={whatsapp}
                class="float-right ml-5 px-6 py-3 text-blue-100 no-underline bg-green-500 rounded hover:bg-green-600  hover:text-green-200" target="_blank">Whatsapp
            </a>
        </span>

        <br />

        <br />
    </li>
);

export default Item;