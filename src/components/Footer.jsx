

const Footer = () => {
    const year = new Date().getFullYear();  
    return (
        <div className="card-footer">
            <div className="container has-text-centered">
                <p className="has-text-grey is-size-7">{year}</p>
            </div>            
        </div>
    );
};

export default Footer;