import './Footer.sass';

const Footer = () => {
    return (
        <div className="footer">
            <div className="network">
                <a href="https://facebook.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram fa-2x"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
            </div>
            <div className="companyInfo">
                <div>BREKKIE®</div>
                <div>Copyright ©2021</div>
            </div>
        </div>
    )
}

export default Footer;