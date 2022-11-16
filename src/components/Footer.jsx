


const Footer = () => {
    const year = new Date().getFullYear();
   

    return (
        <div className="text-slate-400">
            <p>{year}</p>
        </div>
    );
};


export default Footer;